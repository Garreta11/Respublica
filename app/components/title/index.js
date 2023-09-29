import styles from './title.module.scss'
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function  title({text, button, btnlink}) {
    
    const scrollToSection = (e) => {
        e.preventDefault();
        const section = document.querySelector(btnlink); // Replace with the target section's id
        const yOffset = -100; 
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

        if (section) {
            window.scrollTo({top: y, behavior: 'smooth'});
        }
    }

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
                <Link href={btnlink} onClick={scrollToSection}>
                    <button className={styles.title_btn}>
                        Zum Video Tutorial
                    </button>
                </Link>
            )}

        </div>
    )
}