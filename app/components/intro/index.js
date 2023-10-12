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
                    <Title text="Basteln Sie sich in Stimmung!"/>
                    <div className={styles.intro_text}>
                        <p>So etwas macht man auch nicht jedes Jahr: Weihnachtsbäume falten!</p>
                        <br />
                        <p>Warum nicht jetzt damit beginnen? Das Ergebnis kann sich sehen lassen – und eignet sich perfekt als Dekoration auf dem Gabentisch.</p>
                        <br />
                        <p>Noch etwas weiter nach unten scrollen und schon gibts unser Video-Tutorial.</p>
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
                <img className={styles.intro_stars_img} src="/stars--intro.svg" />
            </motion.div>

            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={transitionStars}
                className={styles.intro_stars_rot}
            >
                <img className={styles.intro_stars_rot_1} src="/stars--intro-rot.svg" />
                <img className={styles.intro_stars_rot_2} src="/stars--intro-rot.svg" />
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