'use client'

import Title from "../title"
import styles from "./wishes.module.scss";

import { useRef, useEffect, useState } from 'react'

export default function wishes() {

    const wishesRef = useRef()
    const containerRef = useRef()

    const [isMiddle, setIsMiddle] = useState(false);

    const checkIsMiddle = () => {
        const element = containerRef.current;
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementMiddle = rect.top + rect.height / 2;
          const viewportMiddle = window.innerHeight / 2;
          setIsMiddle(Math.abs(elementMiddle - viewportMiddle) < window.innerHeight * 0.3);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            if (entry.isIntersecting) {
                window.addEventListener('scroll', checkIsMiddle);
            }
        })
        observer.observe(wishesRef.current)
    }, [])

    return(
        <div ref={wishesRef} className={styles.wishes}>
            <Title text="Merry Christmas and a happy new year!!!" />

            <p className={styles.wishes_description}>Wir hoffen wir konnten Ihnen und ihren Familien mit den Origami Bäumchen eine Freude bereiten!</p>

            <button>
                Anleitung herunterladen
            </button>

            <div ref={containerRef} className={styles.wishes_year}>
                {(isMiddle) ? (
                    <img src="./2024.svg" />
                )
                : (
                    <img src="./2023.svg" />
                )}

            </div>
        </div>
    )
}