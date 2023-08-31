import React from 'react'
import styles from './Contact.module.css'
import icon from '../../assets/images/call.png'

export const Contact = () => {
  return (
    <section id={styles.contact_section}>
      <div className={styles["wrapper"]}>
        <div className={styles['contact_us']}>
          <h3>Contact Us</h3>
          <p>In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
          <div className={styles["call"]}>
            <img src={icon} alt="" />
            <div className={styles["text"]}>
              <h5>CALL US NOW</h5>
              <p className={styles["num"]}>+998(90)134-74-32</p>
            </div>
          </div>
          <div className={styles["line"]}></div>
          <div className={styles['question']}>
            <h5>Not convinced yet?</h5>
            <p>Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna purus diam.</p>
            <button>Browse our packages</button>
          </div>
        </div>
        <div className={styles['inputs']}>
          <div className={styles['fullname']}>
            <h4>Full name</h4>
            <input type="text" />
          </div>
          <div className={styles['number']}>
            <h4>Phone Number</h4>
            <input type="text" />
          </div>
          <div className={styles['address']}>
            <h4>Address</h4>
            <input type="text" />
          </div>
          <div className={styles['email']}>
            <h4>Email</h4>
            <input type="text" />
          </div>
          <div className={styles['req_service']}>
            <h4>Requested service</h4>
            <input type="text" />
          </div>
          <div className={styles['dayof']}>
            <h4>Day of service</h4>
            <input type="text" />
          </div>
          <div className={styles['add_note']}>
            <h4>Add a note</h4>
            <input type="text" />
          </div>
          <div className={styles['submit']}>
            <button>Submit message</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact