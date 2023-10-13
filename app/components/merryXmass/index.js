'use client'
import styles from './merryXmass.module.scss'
import { Canvas, extend, useFrame, useThree, useResource } from "@react-three/fiber"
import { shaderMaterial, OrthographicCamera, OrbitControls } from '@react-three/drei';
import { useState, useRef, useMemo, useEffect } from "react";
import * as THREE from 'three'

import { useInView } from 'react-intersection-observer'

import TouchTexture from "../touchtexture";

const ParticleMaterial = shaderMaterial(
    { 
        uTime: 0,
        uRandom: 0.0,
        uDepth: 0.0,
        uSize: 0.0,
        uSizeParticle: 2.,
        uTextureSize: new THREE.Vector2(0, 0),
        uTexture: null,
        uTouch: null,
        uTouchAmplitude: 10.0,
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

        varying float vPSize;

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


        /*
         * curl noise
         */
        vec3 mod289(vec3 x) {
            return x - floor(x * (1.0 / 289.0)) * 289.0;
        }
        
        vec2 mod289(vec2 x) {
            return x - floor(x * (1.0 / 289.0)) * 289.0;
        }
        
        float noise(vec2 v)
        {
            const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                              0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                             -0.577350269189626,  // -1.0 + 2.0 * C.x
                              0.024390243902439); // 1.0 / 41.0
            // First corner
            vec2 i  = floor(v + dot(v, C.yy) );
            vec2 x0 = v -   i + dot(i, C.xx);
        
            // Other corners
            vec2 i1;
            //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0
            //i1.y = 1.0 - i1.x;
            i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
            // x0 = x0 - 0.0 + 0.0 * C.xx ;
            // x1 = x0 - i1 + 1.0 * C.xx ;
            // x2 = x0 - 1.0 + 2.0 * C.xx ;
            vec4 x12 = x0.xyxy + C.xxzz;
            x12.xy -= i1;
        
            // Permutations
            i = mod289(i); // Avoid truncation effects in permutation
            vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
                + i.x + vec3(0.0, i1.x, 1.0 ));
        
            vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
            m = m*m ;
            m = m*m ;
        
            // Gradients: 41 points uniformly over a line, mapped onto a diamond.
            // The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)
        
            vec3 x = 2.0 * fract(p * C.www) - 1.0;
            vec3 h = abs(x) - 0.5;
            vec3 ox = floor(x + 0.5);
            vec3 a0 = x - ox;
        
            // Normalise gradients implicitly by scaling m
            // Approximation of: m *= inversesqrt( a0*a0 + h*h );
            m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        
            // Compute final noise value at P
            vec3 g;
            g.x  = a0.x  * x0.x  + h.x  * x0.y;
            g.yz = a0.yz * x12.xz + h.yz * x12.yw;
            return 130.0 * dot(m, g);
        }
        
        vec3 curl(float	x,	float	y,	float	z)
        {
        
            float	eps	= 1., eps2 = 2. * eps;
            float	n1,	n2,	a,	b;
        
            x += uTime * 0.1;
            y += uTime * 0.1;
            z += uTime * 0.1;
        
            vec3	curl = vec3(0.);
        
            n1	=	noise(vec2( x,	y	+	eps ));
            n2	=	noise(vec2( x,	y	-	eps ));
            a	=	(n1	-	n2)/eps2;
        
            n1	=	noise(vec2( x,	z	+	eps));
            n2	=	noise(vec2( x,	z	-	eps));
            b	=	(n1	-	n2)/eps2;
        
            curl.x	=	a	-	b;
        
            n1	=	noise(vec2( y,	z	+	eps));
            n2	=	noise(vec2( y,	z	-	eps));
            a	=	(n1	-	n2)/eps2;
        
            n1	=	noise(vec2( x	+	eps,	z));
            n2	=	noise(vec2( x	+	eps,	z));
            b	=	(n1	-	n2)/eps2;
        
            curl.y	=	a	-	b;
        
            n1	=	noise(vec2( x	+	eps,	y));
            n2	=	noise(vec2( x	-	eps,	y));
            a	=	(n1	-	n2)/eps2;
        
            n1	=	noise(vec2(  y	+	eps,	z));
            n2	=	noise(vec2(  y	-	eps,	z));
            b	=	(n1	-	n2)/eps2;
        
            curl.z	=	a	-	b;
        
            return	curl;
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
            float rndz = (random(pindex) + snoise(vec2(pindex * 0.1, uTime * 0.001)));

            // center
            displaced.xy -= uTextureSize * 0.5;

            // touch
            float t = texture2D(uTouch, puv).r;
            displaced.z += t * uTouchAmplitude * rndz;
            displaced.x += cos(angle) * t * uTouchAmplitude * rndz;
            displaced.y += sin(angle) * t * uTouchAmplitude * rndz;

            // curl
            // displaced.xyz += 5. * curl(offset.x * 10.0, offset.y * 10.0, offset.z * 10.0);

            // particle size
            float psize = (snoise(vec2(uTime * 0.1, pindex) * 0.5) + 2.0);
            psize *= max(grey, 0.2);
            psize *= uSize;


            // final position
            vec4 mvPosition = modelViewMatrix * vec4(displaced, 1.0);
            mvPosition.xyz += position * psize;
            vec4 finalPosition = projectionMatrix * mvPosition;

            gl_Position = finalPosition;
            float pSize = mix(1.0, 5.0, (displaced.z / (uTouchAmplitude)));
            gl_PointSize = uSizeParticle * pSize;

            vPSize = pSize;
        }
    `,
    // fragment shader
    /*glsl*/`

        uniform sampler2D uTexture;

        varying vec2 vPUv;
        varying vec2 vUv;
        varying float vPSize;

        float circle(vec2 uv, float border) {
            float radius = 0.5;
            float dist = radius - distance(uv, vec2(0.5));
            return smoothstep(0.0, border, dist);
        }

        float map(float value, float min1, float max1, float min2, float max2) {
            return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
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
            vec4 greenColor = vec4(0.68, 0.84, 0.2, 1.0);
            vec4 whiteColor = vec4(1., 1., 1., 1.0);

            // final color
            color = mix(colB, whiteColor, map(vPSize, 0.0, 3.0, 0.5, 1.0));

            gl_FragColor = color;

            gl_FragColor.a *= circle(gl_PointCoord, 0.2);
        }
    `
)
// declaratively
extend({ ParticleMaterial })


const Scene = ({texture, inView}) => {
    const { gl, camera, mouse, size } = useThree();

    const particlesRef = useRef()
    const materialRef = useRef()
    const touchRef = useRef()

    let width = texture.image.width
    let height = texture.image.height

    const [widthTexture, setWidthTexture] = useState(width)
    const [heightTexture, setHeightTexture] = useState(height)
    
    const [hovered, setHovered] = useState();
    const [touchTexture, setTouchTexture] = useState();

    const raycaster = new THREE.Raycaster();

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

   const EnableRender = () => useFrame((state, delta) => {

        materialRef.current.uniforms.uTime.value += delta * 0.001;
        
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

    const DisableRender = () => useFrame(() => null, 1000)

    useEffect(() => {
        const handleResize = () => {
            /* if (window.innerWidth < 921) {
                camera.position.set(0, 0, 500)
                materialRef.current.uniforms.uSizeParticle.value = 1.;
            } else {
                camera.position.set(0, 0, 300)
                materialRef.current.uniforms.uSizeParticle.value = 2.;
            } */
        }

        window.addEventListener("resize", handleResize);
        handleResize()

        return () => window.removeEventListener("resize", handleResize); 
    })
    
    return (
        <>
            {/* <OrbitControls /> */}

            {inView ? <EnableRender /> : <DisableRender />}

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
                    depthWrite={false}
                    sizeAttenuation={true}
                    emissive={"white"}
                    emissiveIntensity={10}
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

    const { ref, inView } = useInView()

    return(
        <div ref={ref} className={styles.xmass}>
            <div className={styles.xmass_wrapper}>
                <Canvas
                    orthographic={false}
                    camera={{ position: [0, 0, 150] }}
                    fov={window.innerHeight / window.screen.height}
                    aspect={window.innerWidth / window.innerHeight}
                    dpr={1}
                >
                    <Scene inView={inView} texture={texture} />
                </Canvas>
            </div>
        </div>
    )
}