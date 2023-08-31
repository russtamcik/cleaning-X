import React from 'react'
import styles from './Articles.module.css'
import plesos from '../../assets/images/plesos.png'
import sister from '../../assets/images/sister.png'

export const Articles = () => {
  return (
    <section id={styles.articles_section}>
      <div className={styles["article_head"]}>
        <h1>Articles & resources</h1>
        <div className={styles["knops"]}>
          <button>Get a free quote</button>
          <button>Browse articles</button>
        </div>
      </div>
      <div className={styles["sides"]}>
        <div className={styles["left_side"]}>
          <img src={plesos} alt="" />
          <div className={styles['info']}>
            <h4>8 best vacuum cleaners to clean any mess for your home in 2022</h4>
            <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
            <div className={styles['data']}>
              <h5>Jan 28, 2022</h5>
              <div className={styles["box"]}></div>
            </div>
          </div>
        </div>
        <div className={styles["right_side"]}>
        <img src={sister} alt="" />
          <div className={styles['info']}>
            <h4>How to properly disinfect your phone and other electronics</h4>
            <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
            <div className={styles['data']}>
              <h5>Feb 1, 2022</h5>
              <div className={styles["box"]}></div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Articles