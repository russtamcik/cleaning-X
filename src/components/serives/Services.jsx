import React from 'react'
import styles from './Services.module.css'
import house from '../../assets/images/house.png'
import building from '../../assets/images/building.png'
import factory from '../../assets/images/factory.png'
import women from '../../assets/images/women.png'
import icon from '../../assets/images/call.png'

export const Services = () => {
  return (
    <section id={styles.services_section}>
      <div className={styles["head"]}>
        <h1 className={styles['services_h1']}>Our Services</h1>
        <button>Explore services</button>
      </div>
      <div className={styles["items"]}>
        <div className={styles["card_item_1"]}>
          <img src={house} alt="" />
          <h4>House cleaning</h4>
          <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
        </div>
        <div className={styles["card_item_1"]}>
          <img src={building} alt="" />
          <h4>Office cleaning</h4>
          <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
        </div>
        <div className={styles["card_item_1"]}>
          <img src={factory} alt="" />
          <h4>Industrial cleaning</h4>
          <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
        </div>
      </div>
      <div className={styles["cleaning"]}>
        <div className={styles["left"]}>
          <img src={women} alt="" />
        </div>
        <div className={styles['right']}>
          <h4>Covid-19 sanitization</h4>
          <h2>We follow guidelines to keep you safe from the COVID-19 virus</h2>
          <p>Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.</p>
          <div className={styles["contact"]}>
            <button>Get a free quote</button>
            <div className={styles["call"]}>
              <img src={icon} alt="" />
              <div className="text">
                <h5>CALL US NOW</h5>
                <p className={styles["num"]}>+998(90)134-74-32</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;