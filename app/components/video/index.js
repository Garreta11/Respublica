'use client'

import { gsap, ScrollTrigger } from "gsap/all";
import styles from "./video.module.scss";
import { useRef, useEffect, useState } from 'react'
import { useScroll, motion, useTransform } from "framer-motion";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function video() {

    const textRef = useRef()
    const videoRef = useRef()

    const [heightVideo, setHeightVideo] = useState(0)

    useEffect(() => {
        let st = ScrollTrigger.create({
            trigger: textRef.current,
            pin: textRef.current,
            start: "center center",
            markers: false,
            end: () => "+=" + screen.height,
            onUpdate: (self) => {
                const h = self.progress * 100
                setHeightVideo(h)
            },
            onComplete: (self) => {
                console.log("Scroll complete")
                videoRef.current.pause()
            }
        });
        return () => st.kill();
    }, [])



    return(
        <div id="video" className={styles.vid}>
            <div className={styles.vid_wrapper}>
                <p
                    ref={textRef}
                    className={styles.vid_wrapper_text}
                >
                    MERRY CHRISTMAS
                </p>
                <motion.video
                    className={styles.vid_wrapper_video}
                    ref={videoRef}
                    controls={false}
                    style={{height: heightVideo + "%"}}
                    autoPlay
                    muted
                >
                    <source src="/video.mp4" type="video/mp4" />
                </motion.video>
            </div>

            <div className={styles.vid_btn}>
                <Link href="download.pdf" target="_blank">
                    <button>
                        Anleitung herunterladen
                    </button>
                </Link>
            </div>

        </div>
    )
}