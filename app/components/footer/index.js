'use client'

import Link from 'next/link';
import styles from './footer.module.scss'

export default function  footer() {
    return(
        <footer className={styles.footer}>
            <div className={styles.footer_top}>
                <div className={styles.footer_row}>
                    <div className={styles.footer_columns}>

                        <div className={styles.footer_column}>
                            <div className={styles.footer_column_section}>
                                <h4>So erreichen sie uns</h4>
                                <div className={styles.footer_column_textblock}>
                                    <p>
                                        <b>respublica</b>
                                        <br />
                                        Agentur für Kommunikation GmbH
                                    </p>
                                    <p>
                                        Ohmstr. 15
                                        <br />
                                        80802 München
                                        <br />
                                        Tel.: +49.89.21 31 98 0
                                        <br />
                                        <Link href="mailto:hallo@respublica.de">hallo@respublica.de</Link>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.footer_column}>
                            <div className={styles.footer_column_section}>
                                <h4>Werden Sie unser Fan</h4>
                                <div className={styles.footer_column_social}>
                                    <div className={styles.footer_column_social_wrapper}>
                                        <Link href="https://de-de.facebook.com/respublicaGmbH/" target="_blank" className={styles.footer_column_social_icon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                                        </Link>
                                        <Link href="https://www.youtube.com/channel/UC6vk-XFtwDJzYv_sWQ7HEMg?view_as=subscriber" target="_blank" className={styles.footer_column_social_icon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>    
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.footer_column}>
                            <div className={styles.footer_column_section}>
                                <h4>Zum Nachlesen</h4>
                                <div className={styles.footer_column_textblock}>
                                    <p>
                                        <Link href="https://www.respublica.de/impressum">Impressum</Link>
                                    </p>
                                    <p>
                                        <Link href="https://www.respublica.de/datenschutz">Datenschutz</Link>
                                    </p>
                                    <p>
                                        <Link href="https://www.respublica.de/#edit-cookies">Cookies bearbeiten</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.footer_column}>
                            <div className={styles.footer_column_section}>
                                <h4>we also speak english</h4>
                                <div className={styles.footer_column_textblock}>
                                    <p>
                                        <Link href="https://www.respublica.de/en/" target='_blank'>English</Link>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={styles.footer_bottom}>
                <div className={styles.footer_row}>
                    <p className={styles.footer_copyright}>Die Agentur der Denker, Träumer und Macher.</p>
                </div>
            </div>
        </footer>
    )
}