import React from 'react'
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}> 
            <h1 className={styles.title}>Hi, I'm Subhan</h1>
            <p class={styles.description}>Hello! I’m Subhan, a Piping Design Engineer specializing in industrial systems. I focus on Plant 3D pipe routing, load calculations, and isometric generation, with expertise in piping administration, custom part creation, and advanced XML-based isometric output customization. Experienced in environmental control systems, I successfully delivered piping layouts for Wet Gas Scrubbers, while currently expanding my technical proficiency into AVEVA E3D and leveraging Python scripting to automate design workflows.</p>
            <a href="mailto:saleemsubhan2003@gmail.com" className={styles.contactBtn}>Contact me</a>
        </div>
        <img src={getImageUrl("hero/croppedhero.jpg")} alt="my-image" className={styles.heroImg} style={ { width: "550px", height: "auto"}} />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}

