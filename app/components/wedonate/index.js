'use client'

import Title from "../title"
import styles from "./wedonate.module.scss";

import Santaclaus from "../santaclaus";

export default function wedonate({ santa }) {
    
    return(
        <div id="wedonate" className={styles.wedonate}>

            <Title text="Wir spenden, Sie falten!" button="Zum Video Tutorial" btnlink="#video"/>
            
            <div className={styles.wedonate_text}>
                <p>Auch in diesem Jahr wollen wir zu Weihnachten wieder Spenden. Für jeden Download unserer "Step-by-Step Origami-Weihnachtsbaum-Anleitung" spenden wir an jene, die Unterstützung brauchen. Einfach das Tutorial anschauen, die Anleitung herunterladen und los falten.</p>
            </div>

            <div className={styles.wedonate_trees}>
                <div className={styles.wedonate_trees_wrapper} >
                    <img className={styles.wedonate_trees_star} src="star--green.svg" />
                    <img src="tree--wireframe.svg" />
                </div>
                <div className={styles.wedonate_trees_wrapper} >
                    <img className={styles.wedonate_trees_star} src="star--green.svg" />
                    <img src="tree--wireframe.svg" />
                </div>
                
            </div>

            <Santaclaus santa={santa} />

        </div>
    )
}