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

    const checkIsMiddle = () => {
        const element = containerRef.current;
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementMiddle = rect.top + rect.height / 2;
          const viewportMiddle = window.innerHeight / 2;
          
          setIsMiddle((elementMiddle - viewportMiddle) < window.innerHeight * 0.3);
        }
    };

    const startTransition = () => {
        setInterval(() => {
            setYear(prevYear => !prevYear);
        }, 5000)
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            if (entry.isIntersecting) {
                startTransition()
            }
        })
        observer.observe(wishesRef.current)
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
                {(year) ? (
                    <img src="./2024.svg" />
                )
                : (
                    <img src="./2023.svg" />
                )}

            </div>
        </div>
    )
}