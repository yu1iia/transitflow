import styles from './News.module.css';
import Image from 'next/image';

import line from '../../images/pattern1.png';
import cargo from '../../images/cargo7.png';
import moving from '../../images/moving6.png';
import barge from '../../images/cargo6.png';
import calendarIcon from '../../images/calendar-icon.png';

const News = () => {
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
          <h3 className={styles.title}>Our Blog</h3>
        </div>
        <h2 className={styles.header}>Our Latest News</h2>
      </div>
      <ul className={styles.newsList}>
        <li className={styles.newsElement}>
          <Image
            className={styles.newsImage}
            src={cargo}
            alt="cargo"
            width={453}
            height={308}
          />
          <span className={styles.newsDate}>
            <Image
              className={styles.calendarIcon}
              src={calendarIcon}
              alt="calendar icon"
              width={56}
              height={52}
            />
            <span className={styles.newsDay}>8</span>
            <span className={styles.newsMonth}>September</span>
          </span>
          <div className={styles.newsDescription}>
            <h3 className={styles.newsTitle}>
              Inland freight a worthy <br />
              solution for your business
            </h3>
            <p className={styles.newsContent}>
              We are dedicated in creating added value
              <br /> for our customers by implementing modern
              <br /> technology in our work.
            </p>
            <ul className={styles.newsContentList}>
              <li className={styles.newsDetails}>Urgent transport solutions</li>
              <li className={styles.newsDetails}>
                Reliable & experienced staffs
              </li>
              <li className={styles.newsDetails}>Urgent transport solutions</li>
              <li className={styles.newsDetails}>
                Reliable & experienced staffs
              </li>
            </ul>
          </div>
        </li>
        <li className={styles.newsElement}>
          <Image
            className={styles.newsImage}
            src={moving}
            alt="boxes"
            width={453}
            height={308}
          />
          <span className={styles.newsDate}>
            <Image
              className={styles.calendarIcon}
              src={calendarIcon}
              alt="calendar icon"
              width={56}
              height={52}
            />
            <span className={styles.newsDay}>12</span>
            <span className={styles.newsMonth}>September</span>
          </span>
          <div className={styles.newsDescription}>
            <h3 className={styles.newsTitle}>
              How technology can help <br />
              redraw the supply chain map
            </h3>
            <p className={styles.newsContent}>
              We are dedicated in creating added value <br />
              for our customers by implementing modern <br />
              technology in our work.
            </p>
            <ul className={styles.newsContentList}>
              <li className={styles.newsDetails}>Urgent transport solutions</li>
              <li className={styles.newsDetails}>
                Reliable & experienced staffs
              </li>
              <li className={styles.newsDetails}>Urgent transport solutions</li>
              <li className={styles.newsDetails}>
                Reliable & experienced staffs
              </li>
            </ul>
          </div>
        </li>
        <li className={styles.newsElement}>
          <Image
            className={styles.newsImage}
            src={barge}
            alt="barge"
            width={453}
            height={308}
          />
          <span className={styles.newsDate}>
            <Image
              className={styles.calendarIcon}
              src={calendarIcon}
              alt="calendar icon"
              width={56}
              height={52}
            />
            <span className={styles.newsDay}>25</span>
            <span className={styles.newsMonth}>September</span>
          </span>
          <div className={styles.newsDescription}>
            <h3 className={styles.newsTitle}>
              Five things you should have
              <br /> ready for your broker
            </h3>
            <p className={styles.newsContent}>
              We are dedicated in creating added value
              <br /> for our customers by implementing modern <br />
              technology in our work.
            </p>
            <ul className={styles.newsContentList}>
              <li className={styles.newsDetails}>Urgent transport solutions</li>
              <li className={styles.newsDetails}>
                Reliable & experienced staffs
              </li>
              <li className={styles.newsDetails}>Urgent transport solutions</li>
              <li className={styles.newsDetails}>
                Reliable & experienced staffs
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <button type="button" className={styles.transportingMoreButton}>
        More Blog
      </button>
    </div>
  );
};
export default News;
