import styles from './Footer.module.css';

import Image from 'next/image';
import logo from '../../images/Logo.png';

import Link from 'next/link';

const Footer = () => {
  return (
    <div className={`${styles.footer_container} ${styles.container}`}>
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
        <li>
          <Link className={styles.pages} href="/">
            Pages
          </Link>
        </li>
        <li>
          <Link className={styles.utility} href="/">
            Utility
          </Link>
        </li>
        <li>
          <Link className={styles.subscribe} href="/">
            Subscribe
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
