'use client'

import Title from "../title"
import styles from "./intro.module.scss";
import Santaclaus from "../santaclaus";
import { useState, useEffect } from 'react'
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";

const transition = { delay: 1, duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };
const transitionStars = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

export default function  Intro() {

    const [showScroll, setShowScroll] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShowScroll(true)
        }, 5000)
    }, [])

    const scrollToSection = (e) => {
        e.preventDefault();
        const section = document.querySelector('#wedonate'); // Replace with the target section's id
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
    }
      

    return(
        <div className={styles.intro}>
            <AnimatePresence>
                <motion.div
                    initial={{ translateX: -100, opacity: 0 }}
                    animate={{ translateX: 0, opacity: 1 }}
                    exit={{ translateX: -100, opacity: 0 }}
                    transition={transition}
                    className={styles.intro_wrapper}
                >
                    <Title text="Basteln Sie sich Weihnachten!"/>
                    <div className={styles.intro_text}>
                        <p>Die Feiertage stehen vor der Tür, und wir haben eine besondere Idee, wie Sie Ihrem Zuhause eine einzigartige Note verleihen können.</p>
                        <p>Entdecken Sie die Freude am Origami. Wir haben eine Video Tutorial und eine Anleitung für Sie vorbereitet. Viel Spaß damit! :)</p>
                    </div>
                </motion.div>
            </AnimatePresence>

            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={transitionStars}
                className={styles.intro_stars}
            >
                <img className={styles.intro_stars_img} src="/stars--intro.png" />
            </motion.div>


            {showScroll && (
                <Link href="#wedonate" className={styles.intro_scroll} onClick={scrollToSection}>
                    <p>Bitte Scrollen</p>
                    <img className={styles.intro_scroll_arrow} src="/arrow--down.svg" alt="arrow down" />
                </Link>
            )}
        </div>
    )
}