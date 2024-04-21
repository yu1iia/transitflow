import styles from './Choose.module.css';
import Image from 'next/image';

import plane from '../../images/plane6.png';
import planeButton from '../../images/plane7.png';
import line from '../../images/pattern1.png';
import boxIcon from '../../images/box-icon.png';
import shipIcon from '../../images/ship-icon.png';
import planetIcon from '../../images/planet-icon.png';
import headphoneIcon from '../../images/headphone-icon.png';
import coinIcon from '../../images/coin-icon.png';
import clockIcon from '../../images/clock-icon2.png';

const Choose = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <ul>
          <li>
            <Image
              className={styles.plane}
              src={plane}
              alt="plane"
              width={926}
              height={610}
            />
          </li>
          <li>
            <Image
              className={styles.planeButton}
              src={planeButton}
              alt="plane"
              width={417}
              height={139}
            />
          </li>
        </ul>
      </div>
      <div className={styles.proposition}>
        <div className={styles.titleWrapper}>
          <div className={styles.titleContainer}>
            <Image
              className={styles.line}
              src={line}
              alt="line"
              width={6}
              height={23}
            />
            <h3 className={styles.title}>Why Choose</h3>
          </div>
          <h2 className={styles.header}>
            We create opportunity to <br /> reach potential
          </h2>
        </div>
        <p className={styles.chooseDescription}>
          Leverage agile frameworks to provide a robust synopsis for <br />
          strategy foster collaborative thinking to further the overall value
          <br /> proposition.
        </p>
        <ul className={styles.chooseList}>
          <li className={styles.chooseElement}>
            <Image
              className={styles.icon}
              src={boxIcon}
              alt="box icon"
              width={63}
              height={63}
            />
            <p className={styles.services}>Safe Package</p>
          </li>
          <li className={styles.chooseElement}>
            <Image
              className={styles.icon}
              src={shipIcon}
              alt="ship icon"
              width={63}
              height={63}
            />
            <p className={styles.services}>Ship Everyware</p>
          </li>
          <li className={styles.chooseElement}>
            <Image
              className={styles.icon}
              src={planetIcon}
              alt="planet icon"
              width={63}
              height={63}
            />
            <p className={styles.services}>Global Tracking</p>
          </li>
          <li className={styles.chooseElement}>
            <Image
              className={styles.icon}
              src={headphoneIcon}
              alt="headphone icon"
              width={63}
              height={63}
            />
            <p className={styles.services}>24/7 Support</p>
          </li>
          <li className={styles.chooseElement}>
            <Image
              className={styles.icon}
              src={clockIcon}
              alt="clock icon"
              width={63}
              height={63}
            />
            <p className={styles.services}>In Time Delivery</p>
          </li>
          <li className={styles.chooseElement}>
            <Image
              className={styles.icon}
              src={coinIcon}
              alt="coin icon"
              width={63}
              height={63}
            />
            <p className={styles.services}>Transparant Pricing</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Choose;
