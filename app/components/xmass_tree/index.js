'use client'

import { useEffect, useRef, Suspense, useState } from 'react'
import { Canvas, useFrame } from "@react-three/fiber"
import styles from './xmass_tree.module.scss'
import { Clone } from '@react-three/drei';

import { useScroll, useTransform } from "framer-motion"
import { motion } from "framer-motion-3d"
// import { useControls } from 'leva'

const transition = { duration: 5, ease: [0.43, 0.13, 0.23, 0.96] };

const Scene = ({ tree, rotation, start }) => {

    // const treeConfig = useControls({
    //     x: { value: 0, min: -3, max: 3, step: 0.01 },
    //     y: { value: 0, min: -3, max: 3, step: 0.01 },
    //     z: { value: 0, min: -3, max: 3, step: 0.01 },
    //     rotX: { value: 0, min: -90 * Math.PI, max: 90 * Math.PI, step: 0.01 },
    //     rotY: { value: 0, min: -90 * Math.PI, max: 90 * Math.PI, step: 0.01 },
    //     rotZ: { value: 0, min: -90 * Math.PI, max: 90 * Math.PI, step: 0.01 },
    // })

    const variants = {
        hidden: { 
            scale: 0,
            rotateX: 90 * Math.PI / 180
        },
        visible: {
            scale: 1.5,
            rotateX: 90 * Math.PI / 180
        },
        // starts: {
        //     scale: [4.5, 4.5, 4.5],
        //     x: [0, 2, 2],
        //     y: [0, 1, 1],
        //     rotateX: [90 * Math.PI / 180, 90 * Math.PI / 180, 0],
        //     rotateY:[0, 0, 0],
        //     rotateZ:[0, 45 * Math.PI / 180, 0]
        // },
        starts: {
            scale: [1.5, 0.45, 0.45],
            x: [0, 0, 2],
            y: [0, 0, 1.5],
            rotateX: [90 * Math.PI / 180, 90 * Math.PI / 180, 0]
        },
    }

    return (
        <>
            <ambientLight intensity={1} color="#b0b0b0"/>
            <pointLight position={2} intensity={5}/>
            <pointLight position={-2} intensity={5}/>
            {tree && ( 
                <Suspense fallback={null}>
                    {/* Main */}
                    <motion.mesh
                        initial="hidden"
                        animate={start ? ['starts']: 'visible'}
                        variants={variants}
                        transition={transition}
                        // position={[0, 0, 0]}
                        rotation-y={rotation}
                        // position={[treeConfig.x, treeConfig.y, treeConfig.z]}
                        // rotation={[treeConfig.rotX, treeConfig.rotY, treeConfig.rotZ]}
                    >
                        <Clone object={tree.scenes[0]} />
                    </motion.mesh>                 
                </Suspense>
            )}
        </>
    )
}

export default function  xmasstree( {tree, start} ) {

    const scene = useRef();

    const { scrollYProgress } = useScroll({
        target: scene,
        offset: ['start end', 'end start']
    })

    const rotation = useTransform(scrollYProgress, [0, 1], [0, 10])

    return(
        <Canvas ref={scene}>
            <Scene tree={tree} rotation={rotation} start={start}/>
        </Canvas>
    )
}