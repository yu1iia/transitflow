import styles from './Solutions.module.css';
import Image from 'next/image';
var classNames = require('classnames/bind');

import line from '../../images/pattern1.png';
import shipIcon from '../../images/ship-icon2.png';
import planeIcon from '../../images/plane-icon.png';
import warehouseIcon from '../../images/warehouse-icon.png';
import trackIcon from '../../images/track-icon.png';

const Solutions = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <div className={styles.titleContainer}>
          <Image
            className={styles.line}
            src={line}
            alt="line"
            width={6}
            height={23}
          />
          <h3 className={styles.title}>What We Do</h3>
        </div>
        <h2 className={styles.header}>
          Safe & Reliable
          <br /> Cargo Solutions
        </h2>
      </div>
      <div className={styles.solutionsWrapper}>
        <ul className={styles.solutionsList}>
          <li className={styles.solutionsItem}>
            <a className={styles.solutionsLink}>
              <Image
                className={styles.icon}
                src={shipIcon}
                alt="ship"
                width={49}
                height={53}
              />
              <div className={styles.solutionsContainer}>
                <h4 className={styles.solutionTitle}>Sea Transport Services</h4>
                <p className={styles.solutionDescription}>
                  Following the quality of our service
                  <br /> thus having gained trust of our
                  <br /> many clients.
                </p>
              </div>
            </a>
          </li>
          <li className={styles.solutionsItem}>
            <a className={styles.solutionsLink}>
              <Image
                className={styles.icon}
                src={warehouseIcon}
                alt="warehouse"
                width={54}
                height={44}
              />
              <div className={styles.solutionsContainer}>
                <h4 className={styles.solutionTitle}>Warehousing Services</h4>
                <p className={styles.solutionDescription}>
                  Following the quality of our service
                  <br /> thus having gained trust of our
                  <br /> many clients.
                </p>
              </div>
            </a>
          </li>
          <li className={styles.solutionsItem}>
            <a className={styles.solutionsLink}>
              <Image
                className={styles.icon}
                src={planeIcon}
                alt="plane"
                width={75}
                height={65}
              />
              <div className={styles.solutionsContainer}>
                <h4 className={styles.solutionTitle}>Air Fright Services</h4>
                <p className={styles.solutionsDescription}>
                  Following the quality of our service
                  <br /> thus having gained trust of our
                  <br /> many clients.
                </p>
              </div>
            </a>
          </li>
          <li className={styles.solutionsItem}>
            <a className={styles.solutionsLink}>
              <Image
                className={styles.icon}
                src={trackIcon}
                alt="track"
                width={62}
                height={62}
              />
              <div className={styles.solutionsContainer}>
                <h4 className={styles.solutionTitle}>
                  Local Shipping Services
                </h4>
                <p className={styles.solutionsDescription}>
                  Following the quality of our service
                  <br /> thus having gained trust of our
                  <br /> many clients.
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Solutions;
