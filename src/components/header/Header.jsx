import React from 'react'
import logo from '../../assets/images/logo.svg'
import styles from './Header.module.css'
import icon from '../../assets/images/bars.svg'

export const Header = () => {
  return (
    <header>
      <nav>
          <img src={logo} alt="logo"/> 
        <ul>
          <a href="#home" className={styles['nav-link']}>Home</a>
          <a href="#about" className={styles['nav-link']}>About</a>
          <a href="#services" className={styles['nav-link']}>Services</a>
          <a href="#articles" className={styles['nav-link']}>Articles</a>
          <a href="#contact" className={styles['nav-link']}>Contact</a>
        </ul>
        <div className={styles["btn"]}>
          <p>Cart (0)</p>
          <button>Get a free quote</button>
        </div>
        <div className={styles["bars"]}>
          <img src={icon} alt="icon"/>
        </div>
      </nav>
    </header>
  )
}

export default Header