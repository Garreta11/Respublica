'use client'

import { Canvas, useThree, useFrame } from "@react-three/fiber"

import { useInView } from 'react-intersection-observer'
import { useRef, useEffect } from 'react'
import { useMousePosition } from '../../utils/MousePositionContext';
import styles from './santaclaus.module.scss'
import { useSpring, useMotionValue } from 'framer-motion'
import { motion } from "framer-motion-3d"

import Particlessnow from "../particles_snow"

import { OrbitControls } from "@react-three/drei";

const transition = { duration: 3, ease: [0.43, 0.13, 0.23, 0.96] };

export default function  santaclaus({santa}) {

    const santaRef = useRef()

    const { ref, inView } = useInView()

    return(
        <div className={styles.scene} ref={ref}>
            <Canvas className={styles.scene_canvas} ref={santaRef} >
                <Scene inView={inView} santa={santa} />
            </Canvas>
        </div>
    )
}

const Scene = ({ inView, santa }) => {

    const mousePos = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    useEffect(() => {
        const manageMouseMove = (e) => {
            const {clientX, clientY } = e;
            mousePos.x.set((clientX - (window.innerWidth / 2)) / window.innerWidth)
            mousePos.y.set((clientY - (window.innerHeight / 2)) / window.innerHeight)
        }
        window.addEventListener('mousemove', manageMouseMove)
        return () => {window.addEventListener('mousemove', manageMouseMove)}
    }, [])

    const smoothMouse = {
        x: useSpring(mousePos.x),
        y: useSpring(mousePos.y)
    }

    const DisableRender = () => useFrame(() => null, 1000)

    return (
        <>
            {!inView && <DisableRender />}

            <OrbitControls />

            <ambientLight intensity={1} />
            <pointLight position={[2, 1, 1]} intensity={5}/>
            <pointLight position={[-2, -1, 1]} intensity={5}/>

            <Particlessnow />

            {santa && ( 
                <motion.mesh
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 0.9, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={transition}
                    position={[0, 0, 0]}
                    rotation-y={smoothMouse.x}
                    rotation-x={smoothMouse.y}
                >
                    <primitive object={santa.scenes[0]} />
                </motion.mesh>
            )}
        </>
    )
}