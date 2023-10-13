'use client'

import { useEffect, useRef, Suspense, useState } from 'react'
import { Canvas, useFrame } from "@react-three/fiber"
import styles from './xmass_tree.module.scss'
import { Clone } from '@react-three/drei';

import { useScroll, useTransform } from "framer-motion"
import { motion } from "framer-motion-3d"

import { useInView } from 'react-intersection-observer'


const transition = { duration: 5, ease: [0.43, 0.13, 0.23, 0.96] };
const transitionImage = { duration: 2, delay: 5, ease: [0.43, 0.13, 0.23, 0.96] };

const Scene = ({ inView, tree, starTexture, start }) => {

    const [rot, setRot] = useState(0)
    const [rotationImage, setRotationImage] = useState(0)
    const [isScrolling, setIsScrolling] = useState(false);

    const variants = {
        hidden: { 
            scale: 0,
            rotateX: 90 * Math.PI / 180
        },
        visible: {
            scale: 1.5,
            rotateX: 90 * Math.PI / 180
        },
        starts: {
            scale: [1.5, 0.45, 0.45],
            x: [0, 0, 2],
            y: [0, 0, 1.5],
            rotateX: [90 * Math.PI / 180, 90 * Math.PI / 180, 0]
        },
    }

    const variantsImage = {
        hidden: {
            opacity: 0,
            scale: 0
        },
        visible: {
            opacity: 1,
            scale: 0.5
        }
    }

    useEffect(() => {
        let scrollTimeout;
        // Add scroll event listener when the component mounts
        const handleScroll = () => {
            setIsScrolling(true);
      
            // Clear the previous timeout (if any) and set a new one
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
              setIsScrolling(false);
            }, 100); // Adjust the timeout duration as needed
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const EnableRender = () => useFrame((_, delta) => {
        let r = rot
        const speed = isScrolling ? delta * 1 : delta * 0.1
        r += speed
        setRot(r)

        let rotImage = rotationImage
        rotImage -= delta * 0.1
        setRotationImage(rotImage)
    })

    const DisableRender = () => useFrame(() => null, 1000)

    return (
        <>
            {inView ? <EnableRender /> : <DisableRender />}

            <ambientLight intensity={1} color="#b0b0b0"/>
            <pointLight position={2} intensity={5}/>
            <pointLight position={-2} intensity={5}/>
            {starTexture && (
                <motion.mesh
                    position={[2, 2.3, 0]}
                    variants={variantsImage}
                    initial="hidden"
                    animate={start ? 'visible' : ''}
                    transition={transitionImage}
                    rotation-z={rotationImage}
                >
                    <planeGeometry />
                    <meshBasicMaterial transparent map={starTexture} />
                </motion.mesh>
            )}
            {tree && ( 
                <Suspense fallback={null}>
                    {/* Main */}
                    <motion.mesh
                        initial="hidden"
                        animate={start ? ['starts']: 'visible'}
                        variants={variants}
                        transition={transition}
                        rotation-y={rot}
                    >
                        <Clone object={tree.scenes[0]} />
                    </motion.mesh>                 
                </Suspense>
            )}
        </>
    )
}

export default function  xmasstree( {tree, start, starTexture} ) {

    const { ref, inView } = useInView()

    const rotation = 0

    return(
        <div className={styles.tree} ref={ref}>
            <Canvas>
                <Scene inView={inView} starTexture={starTexture} tree={tree} rotation={rotation} start={start}/>
            </Canvas>
        </div>
    )
}