import styles from './Contact.module.css';
import Image from 'next/image';

import line from '../../images/pattern1.png';
import email from '../../images/envelope-icon.png';
import phone from '../../images/phone-icon.png';
import clock from '../../images/clock-icon.png';
import norto from '../../images/norto-image.png';
import boxOut from '../../images/out-of-the-box.png';
import points from '../../images/points-one.png';
import studio from '../../images/studio-green.png';

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.contactWrapper}>
          <div className={styles.titleContainer}>
            <Image
              className={styles.line}
              src={line}
              alt="line"
              width={6}
              height={23}
            />
            <h3 className={styles.title}>Contact</h3>
          </div>
          <h2 className={styles.header}>Get in touch with us</h2>

          <p className={styles.contactDescription}>
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value.
          </p>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <Image
                className={styles.icon}
                src={email}
                alt="email"
                width={63}
                height={63}
              />
              <div className={styles.contactDetails}>
                <span className={styles.email}>Email</span>
                <br />
                <a href="contact@logistics.com" className={styles.contactEmail}>
                  contact@logistics.com
                </a>
              </div>
            </li>
            <li className={styles.contactItem}>
              <Image
                className={styles.icon}
                src={phone}
                alt="phone"
                width={63}
                height={63}
              />
              <div className={styles.contactDetails}>
                <span className={styles.phone}>Call Us </span>
                <br />
                <a href="tel:(00) 112 365 489" className={styles.phoneNumber}>
                  (00) 112 365 489
                </a>
              </div>
            </li>
            <li className={styles.contactItem}>
              <Image
                className={styles.icon}
                src={clock}
                alt="clock"
                width={63}
                height={63}
              />
              <div className={styles.contactDetails}>
                <span className={styles.schedule}>
                  Mon - Sat 9.00 - 18.00 <br />
                  Sunday Closed
                </span>
              </div>
            </li>
          </ul>
        </div>
        <form
          className={styles.contactForm}
          action="/send-data-here"
          method="post"
        >
          <label for="name"></label>
          <input
            className={styles.contactFormNameInput}
            type="text"
            id="name"
            name="name"
            placeholder="Your name*"
          />
          <label for="email"></label>
          <input
            className={styles.contactFormEmailInput}
            type="text"
            id="email"
            name="email"
            placeholder="Email*"
          />
          <label for="phone"></label>
          <input
            className={styles.contactFormPhoneInput}
            type="phone"
            id="phone"
            name="phone"
            placeholder="Phone Number*"
          />
          <label for="city"></label>
          <input
            className={styles.contactFormCityInput}
            type="text"
            id="city"
            name="city"
            placeholder="City*"
          />
          <textarea className={styles.contactFormMessage}>
            Your Message
          </textarea>
          <button type="submit" className={styles.contactFormButton}>
            Submit Message
          </button>
        </form>
      </div>
      <ul className={styles.imagesList}>
        <li>
          <Image
            className={styles.image}
            src={studio}
            alt="warehouse"
            width={300}
            height={234}
          />
        </li>
        <li>
          <Image
            className={styles.image}
            src={norto}
            alt="mountains"
            width={300}
            height={234}
          />
        </li>
        <li>
          <Image
            className={styles.image}
            src={points}
            alt="plane"
            width={300}
            height={234}
          />
        </li>
        <li>
          <Image
            className={styles.image}
            src={boxOut}
            alt="warehouse"
            width={300}
            height={234}
          />
        </li>
      </ul>
    </div>
  );
};
export default Contact;
