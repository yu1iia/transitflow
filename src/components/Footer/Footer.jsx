import styles from './Footer.module.css';

import Image from 'next/image';
import logo from '../../images/Logo.png';
import envelope from '../../images/envelope-icon.png';
import phone from '../../images/phone-icon.png';
import linkedin from '../../images/linkedin-icon.png';
import twitter from '../../images/twitter-icon.png';
import facebook from '../../images/facebook-icon.png';

import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <div className={`${styles.footer} ${styles.container}`}>
        <div className={styles.footer_container}>
          <Link href="/" alt="homepage">
            <Image
              className={styles.footer_logo}
              src={logo}
              alt="Transitflow-logo"
              width={210}
              height={36}
            />
          </Link>
          <ul className={styles.footer_nav}>
            <li className={styles.item}>
              <Link className={styles.link} href="/">
                Pages
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href="/">
                Utility
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href="/">
                Subscribe
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.content_container}>
        <div className={styles.content}>
          <div className={styles.contact}>
            <p className={styles.information}>
              Leverage agile frameworks to provide a robust synopsis for
              strategy collaborative thinking to further the overall value
              proposition.
            </p>
            <ul className={styles.details}>
              <li className={styles.navigation_item}>
                <Image
                  className={styles.navigation_logo}
                  src={envelope}
                  alt="envelope"
                  width={63}
                  height={63}
                />
                <a
                  className={styles.navigation_link}
                  href="mailto:contact@logistics.com"
                  type="email"
                >
                  Email <br /> contact@logistics.com
                </a>
              </li>
              <li className={styles.navigation_item}>
                <Image
                  className={styles.navigation_logo}
                  src={phone}
                  alt="phone"
                  width={63}
                  height={63}
                />
                <a
                  className={styles.navigation_link}
                  href="tel:00112365489"
                  type="tel"
                >
                  Call Us <br /> (00) 112 365 489
                </a>
              </li>
            </ul>
          </div>
          <ul className={styles.navigation}>
            <li>About Us</li>
            <li>Our Team</li>
            <li>Our Project</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
          <ul className={styles.services}>
            <li>Style Guide</li>
            <li>Changelog</li>
            <li>Licenses</li>
            <li>Protected</li>
            <li>Not Found</li>
          </ul>
          <form
            className={styles.contactForm}
            action="/send-data-here"
            method="post"
          >
            <input
              className={styles.contactFormEmailInput}
              type="text"
              id="email"
              name="email"
              placeholder="Email here*"
            />
            <div>
              <button type="submit" className={styles.contactFormButton}>
                Send Now
              </button>
              <div className={styles.social}>
                <Image
                  className={styles.linkedin}
                  src={linkedin}
                  alt="linkedin icon"
                  width={22}
                  height={22}
                />
              </div>
              <div className={styles.social}>
                <Image
                  className={styles.twitter}
                  src={twitter}
                  alt="twitter icon"
                  width={22}
                  height={18}
                />
              </div>
              <div className={styles.social}>
                <Image
                  className={styles.facebook}
                  src={facebook}
                  alt="twitter icon"
                  width={23}
                  height={22}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
