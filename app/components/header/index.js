'use client'

import styles from './header.module.scss'
import { motion } from 'framer-motion'
import Link from 'next/link'

const transition = { delay: 0.5, duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

export default function  header() {
    return(
        <motion.header
            className={styles.header}
            initial={{ translateY: -20, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            exit={{ translateY: -20, opacity: 0 }}
            transition={transition}
        >
            <Link href='https://respublica.de'>
                <img src="/respublica--logo.svg" alt="Respublica Logo" />
            </Link>
        </motion.header>
    )
}