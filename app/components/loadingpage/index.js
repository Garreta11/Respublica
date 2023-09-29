'use client'

import styles from "./loadingpage.module.scss"
import { useRef } from 'react'
import { motion } from "framer-motion"

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
                        START EXPERIENCE
                    </motion.button>
                </>
            )}
        </div>
    )
}