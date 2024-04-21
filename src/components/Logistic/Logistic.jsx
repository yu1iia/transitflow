import styles from './Logistic.module.css';
import Image from 'next/image';

import line from '../../images/pattern1.png';
import box from '../../images/box-icon.png';
import money from '../../images/money-icon.png';
import logistic from '../../images/logistic.png';

const Logistic = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.titleWrapper}>
            <div className={styles.titleContainer}>
              <Image
                className={styles.line}
                src={line}
                alt="line"
                width={6}
                height={23}
              />
              <h3 className={styles.title}>Why us</h3>
            </div>
            <h2 className={styles.header}>
              We provide full range global
              <br /> logistics solution
            </h2>
          </div>
          <p className={styles.logisticDescription}>
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition. Organically grow the holistic world view of disruptive
            innovation via workplace diversity and empowerment.
          </p>
          <ul className={styles.logisticList}>
            <li className={styles.logisticItem}>
              <a className={styles.logisticLink}>
                <Image
                  className={styles.icon}
                  src={box}
                  alt="box"
                  width={49}
                  height={53}
                />
                <span>Delivery on Time</span>
              </a>
            </li>
            <li className={styles.logisticItem}>
              <a className={styles.logisticLink}>
                <Image
                  className={styles.icon}
                  src={money}
                  alt="money"
                  width={49}
                  height={53}
                />
                <span>Optimized Travel Cost</span>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.logistic}>
          <Image
            className={styles.logistic}
            src={logistic}
            alt="logistic"
            width={565}
            height={462}
          />
        </div>
      </div>
      <ul className={styles.logisticCounterList}>
        <li className={styles.logisticCounter}>
          1294
          <span className={styles.logisticCounterIcon}></span>
          <span className={styles.logisticItemDescription}>
            Delivered Packages
          </span>
        </li>
        <li className={styles.logisticCounter}>
          3594
          <span className={styles.logisticCounterIcon}></span>
          <span className={styles.logisticItemDescription}>
            Satisfied Clients
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Logistic;
