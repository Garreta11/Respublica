'use client'

import styles from './headerInit.module.scss'
import { motion } from 'framer-motion'
import Link from 'next/link'

const transition = { delay: 0, duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

export default function  headerInit() {
    return(
        <header className={styles.header}>
            <Link href='/'>
                <motion.img
                    initial={{ translateY: -20, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    exit={{ translateY: -20, opacity: 0 }}
                    transition={transition}
                    className={styles.header_img}
                    src="/respublica--logo.svg" alt="Respublica Logo"
                />
            </Link>
        </header>
    )
}