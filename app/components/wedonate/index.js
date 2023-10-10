'use client'

import Title from "../title"
import styles from "./wedonate.module.scss";

import Santaclaus from "../santaclaus";

export default function wedonate({ santa }) {
    
    return(
        <div id="wedonate" className={styles.wedonate}>

            <Title text="Wir spenden, Sie falten!" button="Zum Video Tutorial" btnlink="#video"/>
            
            <div className={styles.wedonate_text}>
                <p>Auch in diesem Jahr verteilt der respublica-Weihnachtsmann wieder seine Geschenke an diejenigen, die unsere Unterstützung benötigen: gemeinnützige Organisationen und Vereine.</p>
                <br />
                <p>In diesem Sinne – ein frohes und friedliches Weihnachtsfest und alle Gute für 2024!</p>
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