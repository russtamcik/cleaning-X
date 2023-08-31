import React from 'react'
import styles from './About.module.css'
import calendar from '../../assets/images/calendar.png'
import plastic from '../../assets/images/plastic-card.png'
import clear from '../../assets/images/clear-machine.png'

export const About = () => {
  return (
    <section id={styles.about_section}>
      <div className={styles["text"]}>
        <h1 className={styles['about']}>About Us</h1>
        <p className={styles['about_text']}>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
      </div>
      <div className={styles["cards"]}>
        <div className={styles["card_1"]}>
          <img src={calendar} alt="" />
          <h3 className={styles['one']}>1. Schedule online</h3>
          <p className={styles["title"]}>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
        </div>
        <div className={styles["card_2"]}>
          <img src={plastic} alt="" />
          <h3 className={styles['two']}>2. Pay online easily</h3>
          <p className={styles["title_2"]}>Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.</p>
        </div>
        <div className={styles["card_3"]}>
          <img src={clear} alt="" />
          <h3 className={styles['three']}>3. Get your house cleaned</h3>
          <p className={styles["title_3"]}>Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.</p>
        </div>
      </div>
      <div className={styles["btns"]}>
        <button>Get a free quote</button>
        <button>Explore services</button>
      </div>
    </section>
  )
}

export default About;