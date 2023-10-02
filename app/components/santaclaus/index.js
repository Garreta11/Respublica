'use client'

import { Canvas, useThree } from "@react-three/fiber"
import { useRef, useEffect } from 'react'
import { useMousePosition } from '../../utils/MousePositionContext';
import styles from './santaclaus.module.scss'
import { useSpring, useMotionValue } from 'framer-motion'
import { motion } from "framer-motion-3d"

import Particlessnow from "../particles_snow"

const transition = { duration: 3, ease: [0.43, 0.13, 0.23, 0.96] };

export default function  santaclaus({santa}) {

    const santaRef = useRef()

    const mousePos = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    const manageMouseMove = (e) => {
        const {clientX, clientY } = e;
        mousePos.x.set((clientX - (window.innerWidth / 2)) / window.innerWidth)
        mousePos.y.set((clientY - (window.innerHeight / 2)) / window.innerHeight)
    }

    useEffect(() => {
        window.addEventListener('mousemove', manageMouseMove)
        return () => {window.addEventListener('mousemove', manageMouseMove)}
    }, [])

    const handleClick = () => {
        
    }
    const smoothMouse = {
        x: useSpring(mousePos.x),
        y: useSpring(mousePos.y)
    }

    

    return(
        <div className={styles.scene}>
            <Canvas className={styles.scene_canvas} ref={santaRef}>
                <ambientLight intensity={1} />
                <pointLight position={[2, 1, 1]} intensity={5}/>
                <pointLight position={[-2, -1, 1]} intensity={5}/>
                {santa && ( 
                    <motion.mesh
                        onClick={handleClick}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 0.7, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={transition}
                        position={[0, 0, 0]}
                        rotation-y={smoothMouse.x}
                        rotation-x={smoothMouse.y}
                    >
                        <primitive object={santa.scenes[0]} />
                    </motion.mesh>
                )}

                <Particlessnow />

            </Canvas>
        </div>
    )
}