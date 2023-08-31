import React from 'react'
import icon from '../../assets/images/call.png'
import styles from './Hero.module.css'
import foto from '../../assets/images/clear.png'

export const Hero = () => {
  return (
    <section id={styles.hero_section}>
      <div className={styles["left"]}>
        <h1>Quality cleaning for your home</h1>
        <p>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
        <div className={styles["contact"]}>
          <button>Get a free quote</button>
          <div className={styles["call"]}>
            <img src={icon} alt="" />
            <div className={styles["text"]}>
              <h5>CALL US NOW</h5>
              <p className={styles["num"]}>+998(90)134-74-32</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["right"]}>
        <img src={foto} alt="" />
      </div>
    </section>
  )
}

export default Hero