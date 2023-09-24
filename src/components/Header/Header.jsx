import styles from './Header.module.css';
import 'normalize.css/normalize.css';

import Image from 'next/image';
import logo from '../../images/Logo.png';
import clock from '../../images/clock-icon.png';
import envelope from '../../images/envelope-icon.png';
import phone from '../../images/phone-icon.png';

import Link from 'next/link';

import { Krub } from 'next/font/google';

const krub = Krub({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" alt="homepage">
          <Image src={logo} alt="Transitflow-logo" width={210} height={36} />
        </Link>
        <ul className={styles.navigation}>
          <li className={styles.navigation_item}>
            <Image
              className={styles.navigation_logo}
              src={clock}
              alt="clock"
              width={63}
              height={63}
            />
            <span>
              Mon - Sat 9.00 - 18.00 <br />
              Sunday Closed
            </span>
          </li>
          <li className={styles.navigation_item}>
            <Image
              className={styles.navigation_logo}
              src={envelope}
              alt="envelope"
              width={63}
              height={63}
            />
            <a
              className={styles.navigation_item}
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
              className={styles.navigation_item}
              href="tel:00112365489"
              type="tel"
            >
              Call Us <br /> (00) 112 365 489
            </a>
          </li>
        </ul>
      </div>

      {/* <div>
        <div className={styles.header_container}>
          <Link to="/" alt="homepage" className={styles.logoLink}>
            <img src={logo} className={styles.logoImg} alt="Transitflow-logo" />
          </Link>

          <NavLink to="/" className={styles.header}>
            {viewPort.width < 768 ? '#28' : 'TEAM FSD #28'}
          </NavLink>
        </div>
      </div> */}
    </header>
  );
};

export default Header;
