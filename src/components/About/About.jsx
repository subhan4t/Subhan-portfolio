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
                <img src={getImageUrl("about/valve.png")} alt="UI Icon" style={{ width: '75px', height: 'auto' }} />
                <div className={styles.aboutItemText}>
                    <h3>Piping Designer</h3>
                    <p>Experienced in creating accurate 3D piping layouts, equipment modeling, and generating isometric drawings AutoCAD Plant3D, ensuring compliance with project specifications and engineering standards.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/user-setting.png")} alt="Cursor Icon" style={{ width: '75px', height: 'auto'
                }} />
                <div className={styles.aboutItemText}>
                    <h3>Piping Admin</h3>
                    <p>Managed Spec Editor configurations, handled spec changes, and created custom valves, instruments, and non-native components within AutoCAD Plant 3D. Generated precise isometric drawings and utilized XML backdoor modifications to bypass standard UI Project Manager limitations, forcing the system to output specialized isometric drawings and custom symbols.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/programming.png")} alt="DBMS Icon" style={ { width: "75px", height: "auto"}}/>
                <div className={styles.aboutItemText}>
                    <h3>Mern Stack and Automation</h3>
                    <p>Developed full-stack web applications using the MERN stack while leveraging Python and PyAutoCAD to automate repetitive CAD design tasks, streamlining engineering workflows and improving drafting efficiency.</p>
                </div>
            </li>
        </ul>
    </div>
  </section>
}

