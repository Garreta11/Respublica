import styles from './title.module.scss'
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function  title({text, button}) {
    
    return(
        <div className={styles.title}>
            <motion.h2
                initial={{ translateX: 0 }}
                whileInView={{ translateX: 0 }}
                // viewport={{ once: true }}
                className={styles.title_text}
            >
                {text}
            </motion.h2>

            {button && ( // Check if the 'button' prop is defined
                <button className={styles.title_btn}>
                    <Link href="#section1">
                        Zum Video Tutorial
                    </Link>
                </button>
            )}

        </div>
    )
}