'use client'

import { Canvas, extend, useFrame } from "@react-three/fiber"
import { OrbitControls, shaderMaterial, useFBO } from '@react-three/drei';
import { useState, useRef, useEffect, useMemo } from "react";
import * as THREE from 'three'
import { randFloat } from "three/src/math/MathUtils";
import { useControls } from 'leva'
import { useSpring, useMotionValue } from 'framer-motion'
import { useMousePosition } from "../../utils/MousePositionContext";

import gsap from "gsap";

const ColorShiftMaterial = shaderMaterial(
    { 
        scale: 1,
        size: 1,
        uProgress: 1,
        uTexture: null,
        uNbLines: 16,
        uNbColumns: 9,
        uMouse:[0,0],
        uZoom: 0
    },
    // vertex shader
    /*glsl*/`
        uniform float size;
        uniform float uProgress;
        uniform vec2 uMouse;

        varying vec2 vTextCoords;

        attribute vec3 initPosition;

        float random(float n) {
            return fract(sin(n) * 43758.5453123);
        }
        
        void main() {
            #include <begin_vertex>

            // transformed = initPosition + ((position - initPosition) * uProgress);


            vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
            vec4 finalPosition = projectionMatrix * mvPosition;

            gl_Position = finalPosition;
        
            gl_PointSize = size;

            vTextCoords = position.xy;
        }
    `,
    // fragment shader
    /*glsl*/`

        uniform sampler2D uTexture;
        uniform float uNbLines;
        uniform float uNbColumns;
        uniform float uProgress;
        uniform float uZoom;
        uniform vec2 uMouse;

        varying vec2 vTextCoords;

        float circle (vec2 uv, float border) {
            float radius = 0.5;
            float dist = radius - distance(uv, vec2(0.5));
            return smoothstep(0.0, border, dist);
        }

        float map(float value, float min1, float max1, float min2, float max2) {
            return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
        }

        void main() {

            vec2 uv = gl_PointCoord;
            uv.y *= -1.;
            uv /= vec2(uNbColumns, uNbLines);

            float texOffsetU = vTextCoords.x / uNbColumns;
            float texOffsetV = vTextCoords.y / uNbLines;

            uv += vec2(texOffsetU, texOffsetV);
            uv += vec2(0.5);

            vec2 mouse = uMouse;
            // mouse.x += 0.5;
            // mouse.y += 0.5;

            float dist = distance(uv, mouse);
            float prox = 1. - map(dist, 0., 0.4, 0.,  1.);
            prox = clamp( prox, 0., 1.0 );

            vec2 zoomedUV = mix(uv, mouse + vec2(0.5), prox * uZoom);

            vec4 texture = texture2D(uTexture, zoomedUV);

            // if (texture.r <= 0.1) {
            //     discard;
            // }

            // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
            gl_FragColor = texture;

            gl_FragColor.a *= circle(gl_PointCoord, 0.2);
            gl_FragColor.a *= uProgress;
        }
    `
)
// declaratively
extend({ ColorShiftMaterial })

const Scene = ({texture}) => {

    const mouse = useMousePosition()

    const particlesRef = useRef()
    const materialRef = useRef()

    const config = useControls({
        progress: { value: 1, min: 0, max: 1, step: 0.01 },
        zoom: { value: 0, min: 0, max: 1, step: 0.01 },
    })

    const multiplier = 20
    const nbColumns = 16 * multiplier
    const nbLines = 9 * multiplier

    // Use useMemo to memoize the customBufferGeometry
    const customBufferGeometry = useMemo(() => {
        const vertices = [];
        const initPosition = [];
        
        for (let i = 0; i < nbColumns; i++) {
            for (let j = 0; j < nbLines; j++) {
                const point = [i, j, 0.];
                const initPoint = [i - nbColumns / 2, j - nbLines / 2, randFloat(0, 1000)];
                
                vertices.push(...point);
                initPosition.push(...initPoint);
            }
        }
        const vertices32 = new Float32Array(vertices);
        const initPosition32 = new Float32Array(initPosition);

        const bufferGeometry = new THREE.BufferGeometry();
        bufferGeometry.setAttribute('position', new THREE.BufferAttribute(vertices32, 3));
        bufferGeometry.setAttribute('initPosition', new THREE.BufferAttribute(initPosition32, 3));
        bufferGeometry.center();

        // gsap.fromTo(materialRef.current.uniforms.uProgress,
        //     {
        //         value: 0
        //     },
        //     {
        //         value: 1,
        //         duration: 2.5,
        //         ease: 'Power4.easeOut'
        //     }
        // )

        return bufferGeometry;
    }, [nbColumns, nbLines]); // Recalculate when nbColumns or nbLines change
    
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
                <bufferGeometry attach="geometry" {...customBufferGeometry} />

                <colorShiftMaterial
                    ref={materialRef}
                    uNbLines={nbLines}
                    uNbColumns={nbColumns}
                    uProgress={config.progress}
                    size={8.}
                    transparent={true}
                    uTexture={texture}
                    depthTest={false}
                    depthWrite={false}
                    uMouse={mouse}
                    uZoom={config.zoom}
                />
                
            </points>

            <mesh scale={[16, 9, 1]} position={[0, 0, 142.5]}>
                <planeGeometry />
                <meshStandardMaterial />
            </mesh>
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