'use client'

import { Canvas, extend, useFrame, useThree } from "@react-three/fiber"
import { shaderMaterial, OrthographicCamera, OrbitControls } from '@react-three/drei';
import { useState, useRef, useMemo } from "react";
import * as THREE from 'three'
import { useControls } from 'leva'

import TouchTexture from "../touchtexture";

const ParticleMaterial = shaderMaterial(
    { 
        uTime: 0,
        uRandom: 0.0,
        uDepth: 0.0,
        uSize: 0.0,
        uSizeParticle: 3.5,
        uTextureSize: new THREE.Vector2(0, 0),
        uTexture: null,
        uTouch: null,
        uTouchAmplitude: 100.0

    },
    // vertex shader
    /*glsl*/`

        attribute float pindex;
        attribute vec3 offset;
        attribute float angle;

        uniform float uTime;
        uniform float uRandom;
        uniform float uDepth;
        uniform float uSize;
        uniform float uSizeParticle;
        uniform vec2 uTextureSize;
        uniform sampler2D uTexture;
        uniform sampler2D uTouch;
        uniform float uTouchAmplitude;

        varying vec2 vPUv;
        varying vec2 vUv;

        // Simplex 2D noise
        vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
        
        float snoise(vec2 v){
            const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                -0.577350269189626, 0.024390243902439);
            
            vec2 i  = floor(v + dot(v, C.yy) );
            vec2 x0 = v -   i + dot(i, C.xx);
            vec2 i1;
            i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
            vec4 x12 = x0.xyxy + C.xxzz;
            x12.xy -= i1;
            i = mod(i, 289.0);
            vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
                + i.x + vec3(0.0, i1.x, 1.0 ));
            
            vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
            m = m*m ;
            m = m*m ;
            vec3 x = 2.0 * fract(p * C.www) - 1.0;
            vec3 h = abs(x) - 0.5;
            vec3 ox = floor(x + 0.5);
            vec3 a0 = x - ox;
            m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
            vec3 g;
            g.x  = a0.x  * x0.x  + h.x  * x0.y;
            g.yz = a0.yz * x12.xz + h.yz * x12.yw;
            return 130.0 * dot(m, g);
        }

        float random(float n) {
            return fract(sin(n) * 43758.5453123);
        }
        
        void main() {
            #include <begin_vertex>

            vUv = uv;

            // particle uv
            vec2 puv = offset.xy / uTextureSize;
            vPUv = puv;

            // pixel color
            vec4 colA = texture2D(uTexture, puv);
            float grey = colA.r * 0.21 + colA.g * 0.71 + colA.b * 0.07;

            // displacement
	        vec3 displaced = offset;

            // randomise
            displaced.xy += vec2(random(pindex) - 0.5, random(offset.x + pindex) - 0.5) * uRandom;
            float rndz = (random(pindex) + snoise(vec2(pindex * 0.1, uTime * 0.1)));
            displaced.z += rndz * (random(pindex) * 2.0 * uDepth);

            // center
            displaced.xy -= uTextureSize * 0.5;

            // touch
            float t = texture2D(uTouch, puv).r;
            displaced.z += t * uTouchAmplitude * rndz;
            displaced.x += cos(angle) * t * uTouchAmplitude * rndz;
            displaced.y += sin(angle) * t * uTouchAmplitude * rndz;

            // particle size
            float psize = (snoise(vec2(uTime, pindex) * 0.5) + 2.0);
            psize *= max(grey, 0.2);
            psize *= uSize;

            // final position
            vec4 mvPosition = modelViewMatrix * vec4(displaced, 1.0);
            mvPosition.xyz += position * psize;
            vec4 finalPosition = projectionMatrix * mvPosition;

            gl_Position = finalPosition;
            gl_PointSize = uSizeParticle;
        }
    `,
    // fragment shader
    /*glsl*/`

        uniform sampler2D uTexture;

        varying vec2 vPUv;
        varying vec2 vUv;

        float circle(vec2 uv, float border) {
            float radius = 0.5;
            float dist = radius - distance(uv, vec2(0.5));
            return smoothstep(0.0, border, dist);
        }

        void main() {

            vec4 color = vec4(0.0, 0.0, 0.0, 1.0);
            vec2 uv = vUv;
            vec2 puv = vPUv;

            // pixel color
            vec4 colA = texture2D(uTexture, puv); 

            // greyscale
            float grey = colA.r * 0.21 + colA.g * 0.71 + colA.b * 0.07;
            vec4 colB = vec4(grey, grey, grey, 1.0); 

            // final color
            // color = colB;
            // color = vec4(1.0);
            color = vec4(0.68, 0.84, 0.2, 1.0);

            gl_FragColor = color;
            gl_FragColor.a *= circle(gl_PointCoord, 0.2);
            // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
    `
)
// declaratively
extend({ ParticleMaterial })

const Scene = ({texture}) => {

    const { camera, mouse, size } = useThree();

    const particlesRef = useRef()
    const materialRef = useRef()
    const touchRef = useRef()

    const width = texture.image.width
    const height = texture.image.height

    const [widthTexture, setWidthTexture] = useState(width)
    const [heightTexture, setHeightTexture] = useState(height)
    
    const [hovered, setHovered] = useState();
    const [touchTexture, setTouchTexture] = useState();

    const raycaster = new THREE.Raycaster();

    // const options = useMemo(() => {
    //     return {
    //         uRandom: { value: 0, min: 0, max: 1.0, step: 0.01 },
    //         uDepth: { value: 0, min: 0, max: 1.0, step: 0.01 },
    //         uSize: { value: 0., min: 0, max: 10.0, step: 0.01 },
    //         uTouchAmplitude: { value: 100., min: 10.0, max: 100.0, step: 0.01 },
    //         uSizeParticle: { value: 3.5, min: 1.0, max: 100.0, step: 0.01 },
    //     }
    // }, [])
    // const particles = useControls('Particles', options)

    const discard = true
    // Use useMemo to memoize the customBufferGeometry
    const customBufferGeometry = useMemo(() => {

        const numPoints = width * height;

		let numVisible = numPoints;
		let threshold = 0;
		let originalColors;

        if (discard) {
			// discard pixels darker than threshold #22
			numVisible = 0;
			threshold = 34;

			const img = texture.image;
			const canvas = document.createElement('canvas');
			const ctx = canvas.getContext('2d');

			canvas.width = width;
			canvas.height = height;
			ctx.scale(1, -1);
			ctx.drawImage(img, 0, 0, width, height * -1);

			const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
			originalColors = Float32Array.from(imgData.data);

			for (let i = 0; i < numPoints; i++) {
				if (originalColors[i * 4 + 0] > threshold) numVisible++;
			}
		}

        setWidthTexture(width)
        setHeightTexture(height)

        const geometry = new THREE.InstancedBufferGeometry();

        // positions
        const positions = new THREE.BufferAttribute(new Float32Array(4 * 3), 3);
        positions.setXYZ(0, -0.5, 0.5, 0.0);
        positions.setXYZ(1, 0.5, 0.5, 0.0);
        positions.setXYZ(2, -0.5, -0.5, 0.0);
        positions.setXYZ(3, 0.5, -0.5, 0.0);
        geometry.setAttribute('position', positions);

        // uvs
        const uvs = new THREE.BufferAttribute(new Float32Array(4 * 2), 2);
        uvs.setXYZ(0, 0.0, 0.0);
        uvs.setXYZ(1, 1.0, 0.0);
        uvs.setXYZ(2, 0.0, 1.0);
        uvs.setXYZ(3, 1.0, 1.0);
        geometry.setAttribute('uv', uvs);

        // index
        geometry.setIndex(new THREE.BufferAttribute(new Uint16Array([ 0, 2, 1, 2, 3, 1 ]), 1));

        const indices = new Uint16Array(numPoints);
        const offsets = new Float32Array(numPoints * 3);
        const angles = new Float32Array(numPoints);

        for (let i = 0, j = 0; i < numPoints; i++) {
            if (originalColors[i * 4 + 0] <= threshold) continue;
        
            offsets[j * 3 + 0] = i % width;
            offsets[j * 3 + 1] = Math.floor(i / width);
        
            indices[j] = i;
        
            angles[j] = Math.random() * Math.PI;
        
            j++;
        }

        geometry.setAttribute('pindex', new THREE.InstancedBufferAttribute(indices, 1, false));
        geometry.setAttribute('offset', new THREE.InstancedBufferAttribute(offsets, 3, false));
        geometry.setAttribute('angle', new THREE.InstancedBufferAttribute(angles, 1, false));

        setTouchTexture(new TouchTexture(this))

        return geometry;
    }, [width, height]); // Recalculate when width or height change


    useFrame(({ clock }) => {
        const time = clock.elapsedTime;
        materialRef.current.uniforms.uTime.value = time;
        
        if (touchTexture) {
            touchTexture.update()
            particlesRef.current.material.uniforms.uTouch.value = touchTexture.texture;

            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObject(touchRef.current);
            if (intersects.length > 0) {
                const intersectionUV = intersects[0].uv;
                if (touchTexture) touchTexture.addTouch(intersectionUV);
            }
        }

        // update camera on resize
        camera.aspect = size.width / size.height;
        camera.updateProjectionMatrix();
    })
    
    return (
        <>
            {/* <OrbitControls /> */}

            <ambientLight intensity={1} color="#b0b0b0"/>
            <pointLight position={2} intensity={5}/>
            <pointLight position={-2} intensity={5}/>

            <points
                ref={particlesRef}
                position={[0, 0, 0]}
            >
                <instancedBufferGeometry attach="geometry" {...customBufferGeometry} />

                <particleMaterial
                    ref={materialRef}
                    depthTest={false}
                    transparent={true}
                    uTexture={texture}
                    uTextureSize={new THREE.Vector2(widthTexture, heightTexture)}
                    // uSize={particles.uSize}
                    // uSizeParticle={particles.uSizeParticle}
                    // uRandom={particles.uRandom}
                    // uDepth={particles.uDepth}
                    // uTouchAmplitude={particles.uTouchAmplitude}
                    depthWrite={false}
                    sizeAttenuation={true}
                />
                
            </points>
            
            {touchTexture && (
                <mesh
                    ref={touchRef}
                    onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)}
                    visible={false}
                >
                    <planeGeometry attach="geometry" args={[widthTexture, heightTexture]} />
                    <meshStandardMaterial map={touchTexture.texture}/>
                </mesh>
            )}
        </>
    )
}

export default function  merryXmass( {texture} ) {


    return(
        <Canvas camera={{ position: [0, 0, 150] }}>
            <Scene texture={texture} />
        </Canvas>
    )
}