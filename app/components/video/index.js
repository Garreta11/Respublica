'use client'

import MerryXmass from "../merryXmass";

import { gsap, ScrollTrigger } from "gsap/all";
import styles from "./video.module.scss";
import { useRef, useEffect, useState } from 'react'
import { useScroll, motion, useTransform } from "framer-motion";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function video({texture}) {

    const textRef = useRef()
    const videoRef = useRef()

    const [heightVideo, setHeightVideo] = useState(0)

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        // Function to update window size
        function handleResize() {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });

          videoRef.current.style.maxHeight = windowSize.width  / (16/9) + "px";
        }
    
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        videoRef.current.style.maxHeight = windowSize.width  / (16/9) + "px";
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array means this effect runs once after the initial render
    

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
                <div
                    ref={textRef}
                    className={styles.vid_wrapper_text}
                >
                    <MerryXmass texture={texture}/>
                </div>
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