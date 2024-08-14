import React from 'react'
import { getImageUrl } from '../../utils'
import  styles from './About.module.css';

export const About = () => {
  return <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage1.png")} alt="About Image" className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/uiIcon.png")} alt="UI Icon" />
                <div className={styles.aboutItemText}>
                    <h3>Responsive Layouts</h3>
                    <p>Implemented responsive designs using CSS Flexbox, Grid, and Bootstrap to create web layouts that adapt seamlessly to different screen sizes and devices.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
                <div className={styles.aboutItemText}>
                    <h3>Interactive Features</h3>
                    <p>Enhanced user experience with interactive features, including dynamic forms and animations, using JavaScript, ReactJS, and Bootstrap to build engaging and intuitive interfaces.</p>
                </div>
            </li>
        </ul>
    </div>
  </section>
}

