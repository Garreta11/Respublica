'use client'

import Title from "../title"
import styles from "./wedonate.module.scss";

import Santaclaus from "../santaclaus";

import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function wedonate({ santa, treeTexture, shadow }) {

    const textRef = useRef()
    const treeRef = useRef()
    const textIsInView = useInView(textRef, {once:true})
    const treeIsInView = useInView(treeRef, {once:true})
    
    return(
        <div id="wedonate" className={styles.wedonate}>

            <div
                style={{
                    transform: textIsInView ? 'none' : 'translateX(-100px)',
                    opacity: textIsInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
                ref={textRef}
            >
                <Title text="Sie falten, wir spenden !" button="Zum Video Tutorial" btnlink="#video"/>
                
                <div
                    className={styles.wedonate_text}
                >
                    <p>Auch in diesem Jahr verteilt der respublica-Weihnachtsmann wieder seine Geschenke an diejenigen, die unsere Unterstützung benötigen: gemeinnützige Organisationen und Vereine.</p>
                    <br />
                    <p>In diesem Sinne – ein frohes und friedliches Weihnachtsfest und alles Gute für 2024!</p>
                </div>
            </div>

            <Santaclaus santa={santa} treeTexture={treeTexture} shadow={shadow} />

        </div>
    )
}