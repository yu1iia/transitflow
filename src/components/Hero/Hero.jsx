import styles from './Hero.module.css';

import Link from 'next/link';
import Image from 'next/image';
import arrow from '../../images/page-arrow.png';
import line from '../../images/pattern1.png';

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
                <Link
                  className={`${styles.page} ${styles.activePage}`}
                  href="/"
                >
                  Home
                </Link>
                <hr className={styles.menuSeparator} />
              </li>
              <li className={styles.pageList_element}>
                <Link className={styles.page} href="/about">
                  About
                </Link>
                <hr className={styles.menuSeparator} />
              </li>
              <li className={styles.pageList_element}>
                <Link className={styles.page} href="/pages">
                  Pages
                </Link>
                <Image
                  className={styles.pageArrow}
                  src={arrow}
                  alt="list-arrow"
                />
                <hr className={styles.menuSeparator} />
              </li>
              <li className={styles.pageList_element}>
                <Link className={styles.page} href="/project">
                  Project
                </Link>
                <hr className={styles.menuSeparator} />
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
          <div className={styles.titleContainer}>
            <Image
              className={styles.line}
              src={line}
              alt="line"
              width={6}
              height={23}
            />
            <h3 className={styles.title}>Logistics & Supply Chain Solutions</h3>
          </div>

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
          <button className={styles.explore}>Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
