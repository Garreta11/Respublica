'use client'

import styles from "./loadingpage.module.scss"
import { useRef } from 'react'
import { motion } from "framer-motion"

const transition = { delay: 0, duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };
const transitionText = { delay: 1, duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

export default function  loadingpage( { tree, showbtn, sendDataToParent } ) {

    const btnRef = useRef()
    
    const sendData = () => {

        btnRef.current.style.opacity = 0
        setTimeout(() => {
            const data = true;
            sendDataToParent(data); // Call the function in the parent component with the data
        }, 1000)
    };

    return(
        <div className={styles.loadingpage}>
            <motion.img
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.5 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={transition}
                className={styles.loadingpage_stars_left}
                src="/intro-stars-left.svg"
            />
            <motion.img
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.5 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={transition}
                className={styles.loadingpage_stars_right}
                src="/intro-stars-right.svg"
            />
            <div className={styles.loadingpage_text}>
                <motion.p
                    initial={{ translateX: -50, opacity: 0 }}
                    animate={{ translateX: 0, opacity: 1 }}
                    exit={{ translateX: -50, opacity: 0 }}
                    transition={transitionText}
                >
                    ALL I WANT FOR
                </motion.p>
                <motion.p
                    initial={{ translateX: 50, opacity: 0 }}
                    animate={{ translateX: 0, opacity: 1 }}
                    exit={{ translateX: 50, opacity: 0 }}
                    transition={transitionText}
                >
                    CHRISTMAS IS YOU
                </motion.p>
            </div>
            {showbtn && (
                <>
                    <motion.button
                        ref={btnRef}
                        className={styles.loadingpage_btn}
                        onClick={sendData}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                    >
                        Starten Sie Weihnachten
                    </motion.button>
                </>
            )}
        </div>
    )
}