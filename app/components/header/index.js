'use client'

import styles from './header.module.scss'

export default function  header() {
    return(
        <header className={styles.header}>
            <img src="/respublica--logo.svg" alt="Respublica Logo" />
        </header>
    )
}