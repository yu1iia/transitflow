import styles from './Hero.module.css';

import Link from 'next/link';

import Facebook from '../Facebook';
import Instagram from '../Instagram';
import Twitter from '../Twitter';
import Linkedin from '../Linkedin';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.navigation_container}>
          <div className={styles.navigation}>
            <ul className={styles.pageList}>
              <li className={styles.pageList_element}>
                <Link className={styles.page} href="/">
                  Home
                </Link>
              </li>
              <li className={styles.pageList_element}>
                <Link className={styles.page} href="/about">
                  About
                </Link>
              </li>
              <li className={styles.pageList_element}>
                <Link className={styles.page} href="/pages">
                  Pages
                </Link>
              </li>
              <li className={styles.pageList_element}>
                <Link className={styles.page} href="/project">
                  Project
                </Link>
              </li>
              <li className={styles.pageList_element}>
                <Link className={styles.page} href="/contact">
                  Contact
                </Link>
              </li>
            </ul>

            <div className={styles.social}>
              <button className={styles.social_button}>
                <Instagram />
              </button>
              <button className={styles.social_button}>
                <Facebook />
              </button>
              <button className={styles.social_button}>
                <Twitter />
              </button>
              <button className={styles.social_button}>
                <Linkedin />
              </button>
            </div>
            <button type="button" className={styles.request}>
              Request Quote
            </button>
          </div>
        </div>
        <div className={styles.section}>
          <h3 className={styles.title}>Logistics & Supply Chain Solutions</h3>
          <h1 className={styles.header}>
            Your Gateway <br />
            to any Destination
            <br />
            in the World
          </h1>
          <p className={styles.description}>
            In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie
            inarcu <br /> no, iaculis vehicula ipsum. Nunc faucibus, nisl id
            dapibus finibus, enim <br /> diam interdum nulla, sed laoreet risus
            lectus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
