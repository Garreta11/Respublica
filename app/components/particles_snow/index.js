'use client'

import { useMemo, useRef } from 'react'
import { BufferAttribute } from "three";
import { Suspense } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import * as THREE from 'three'


export default function  particlessnow( {tree} ) {

    const colorMap = useLoader(TextureLoader, 'particle.png')
    const numberSnowflakes = 100 // number of snowflakes
    
    const maxRange = 5
    const xRange = 10
    const zRange = 7
    const minHeight = -maxRange

    const initialPositions = useMemo(() => {
        const p = new Array(numberSnowflakes).fill(0).map((v) => ({
            x: (0.5 - Math.random()) * xRange,
            y: Math.random() * 5,
            z: (0.5 - Math.random()) * zRange
        }));
        return new Float32Array(p.flatMap((v) => [v.x, v.y, v.z]));
    }, [numberSnowflakes]);

    const velocities = useMemo(() => {
        const v = new Array(numberSnowflakes)
            .fill(0)
            .map(() => -Math.random() * 0.01); // Adjust the velocity as needed
        
        return new Float32Array(v);
    }, [numberSnowflakes]);

    const positions = useMemo(() => initialPositions, [
        numberSnowflakes,
    ]);

    const points = useRef();

    useFrame((_, delta) => {
        for (let i = 0; i < numberSnowflakes; i++) {
            positions[i * 3] = initialPositions[i * 3];
            positions[i * 3 + 1] += velocities[i];
            positions[i * 3 + 2] = initialPositions[i * 3 + 2];
            
            if (positions[i * 3 + 1] < minHeight) {
                // Reset snowflake's position and velocity when it falls below minHeight
                positions[i * 3] = (0.5 - Math.random()) * xRange
                positions[i * 3 + 1] = maxRange
                positions[i * 3 + 2] = (0.5 - Math.random()) * zRange
                velocities[i] = -1 * delta // Adjust the velocity as needed
            }
        }
        points.current.geometry.setAttribute('position', new BufferAttribute(positions, 3));
    });

    return(
        <points ref={points} >
            <bufferGeometry>
                <bufferAttribute attach={"attributes-position"} {...positions} />
            </bufferGeometry>
            
            <pointsMaterial
                size={0.2}
                threshold={0.1}
                transparent={true}
                map={colorMap}
                wrapS={THREE.RepeatWrapping}
                wrapT={THREE.RepeatWrapping}
                depthWrite={false}
                depthTest={false}
                sizeAttenuation={true}
            />
        </points>
    )
}