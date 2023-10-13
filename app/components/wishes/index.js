'use client'

import Title from "../title"
import styles from "./wishes.module.scss";

import { useRef, useEffect, useState } from 'react'
import { useInView } from "framer-motion";

export default function wishes() {

    const wishesRef = useRef()
    const containerRef = useRef()

    const textRef = useRef()
    const textIsInView = useInView(textRef, {once:true})
    const imgIsInView = useInView(containerRef, {once:true})

    const [isMiddle, setIsMiddle] = useState(false);

    const [year, setYear] = useState(false)


    useEffect(() => {
        const interval = setInterval(() => {
            setYear(prevYear => !prevYear);
          }, 4000);
      
          return () => clearInterval(interval);
    }, [])

    return(
        <div ref={wishesRef} className={styles.wishes}>

            <div
                style={{
                    transform: textIsInView ? 'none' : 'translateX(-100px)',
                    opacity: textIsInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
                ref={textRef}
            >
                <Title text="Merry Christmas and a happy new year!!!" button="Anleitung herunterladen" btnlink="/download.pdf" download/>

                <p className={styles.wishes_description}>Wir hoffen wir konnten Ihnen und ihren Familien mit den Origami Bäumchen eine Freude bereiten!</p>

            </div>

            <div ref={containerRef} className={styles.wishes_year}
                style={{
                    transform: imgIsInView ? 'none' : 'translateY(100px)',
                    opacity: imgIsInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
            >
                <img className={`${styles.wishes_year_selected} ${styles.wishes_year_selected_2023} ${year ? styles.wishes_year_show : styles.wishes_year_hide}`} src="./2023.svg" />
                <img className={`${styles.wishes_year_selected} ${styles.wishes_year_selected_2024} ${!year ? styles.wishes_year_show : styles.wishes_year_hide}`} src="./2024.svg" />

            </div>
        </div>
    )
}