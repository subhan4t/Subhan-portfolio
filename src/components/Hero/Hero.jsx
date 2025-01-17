import React from 'react'
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}> 
            <h1 className={styles.title}>Hi, I'm Subhan</h1>
            <p class={styles.description}>Hello! I’m Subhan, a Mechanical Engineering student and passionate MERN stack web developer. I love transforming ideas into interactive web experiences using HTML, CSS, JavaScript, ReactJS, and Node.js. Each project allows me to blend my technical expertise with design, delivering innovative and user-friendly solutions.</p>
            <a href="mailto:saleemsubhan2003@gmail.com" className={styles.contactBtn}>Contact me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="my-image" className={styles.heroImg} />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}

