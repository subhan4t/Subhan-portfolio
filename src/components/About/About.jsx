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
                    <p>Designed responsive web layouts using CSS Flexbox, Grid, and Bootstrap to ensure seamless adaptation across various screen sizes and devices in MERN applications.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
                <div className={styles.aboutItemText}>
                    <h3>Interactive Features</h3>
                    <p>Enhanced user experience by creating dynamic forms and interactive features with ReactJS on the frontend, while utilizing Node.js and Express.js on the backend to build intuitive and responsive MERN applications.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/database.png")} alt="DBMS Icon" />
                <div className={styles.aboutItemText}>
                    <h3>Database Management</h3>
                    <p>Integrated MongoDB for efficient data storage and retrieval, ensuring seamless communication between the frontend and backend, while maintaining data consistency and scalability across the application.</p>
                </div>
            </li>
        </ul>
    </div>
  </section>
}

