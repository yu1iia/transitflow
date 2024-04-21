import styles from './Feedback.module.css';
import Image from 'next/image';

import line from '../../images/pattern1.png';
import arrowLeft from '../../images/arrow-left.png';
import arrowRight from '../../images/arrow-right.png';
import quotes from '../../images/quotes.png';
import user from '../../images/user.png';
import user2 from '../../images/user2.png';
import star from '../../images/star.png';

const Feedback = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <Image
          className={styles.line}
          src={line}
          alt="line"
          width={6}
          height={23}
        />
        <h3 className={styles.title}>Testimonials</h3>
      </div>
      <div className={styles.headerWrapper}>
        <h2 className={styles.header}>What Our Customer Say</h2>
        <div>
          <div className={styles.arrowLeft}>
            <Image
              className={styles.arrowLeft}
              src={arrowLeft}
              alt="arrow left"
              width={44}
              height={44}
            />

            <Image
              className={styles.arrowRight}
              src={arrowRight}
              alt="arrow right"
              width={44}
              height={44}
            />
          </div>
        </div>
      </div>
      <div className={styles.feedbackContainer}>
        <ul className={styles.feedbackList}>
          <li className={styles.feedbackItem}>
            <div className={styles.userWrapper}>
              <Image
                className={styles.user}
                src={user}
                alt="user image"
                width={91}
                height={91}
              />
              <div className={styles.userInfo}>
                <p className={styles.userName}>Kathleen Smith</p>
                <p className={styles.userCompany}>Fuel Company</p>
              </div>

              <Image
                className={styles.quotes}
                src={quotes}
                alt="quotes image"
                width={73}
                height={73}
              />
            </div>
            <p className={styles.feedbackText}>
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition. Organically grow the holistic world view of
              disruptive innovation via workplace diversity and empowerment.
            </p>
            <ul className={styles.rating}>
              <li>
                <Image
                  className={styles.ratingStar}
                  src={star}
                  alt="star"
                  width={34}
                  height={34}
                />
              </li>
              <li>
                <Image
                  className={styles.ratingStar}
                  src={star}
                  alt="star"
                  width={34}
                  height={34}
                />
              </li>
              <li>
                <Image
                  className={styles.ratingStar}
                  src={star}
                  alt="star"
                  width={34}
                  height={34}
                />
              </li>
              <li>
                <Image
                  className={styles.ratingStar}
                  src={star}
                  alt="star"
                  width={34}
                  height={34}
                />
              </li>
              <li>
                <Image
                  className={styles.ratingStar}
                  src={star}
                  alt="star"
                  width={34}
                  height={34}
                />
              </li>
            </ul>
          </li>
          <li className={styles.feedbackItem}>
            <div className={styles.userWrapper}>
              <Image
                className={styles.user}
                src={user2}
                alt="user image"
                width={91}
                height={91}
              />
              <div className={styles.userInfo}>
                <p className={styles.userName}>John Martin</p>
                <p className={styles.userCompany}>Restoration Company</p>
              </div>

              <Image
                className={styles.quotes}
                src={quotes}
                alt="quotes image"
                width={73}
                height={73}
              />
            </div>
            <p className={styles.feedbackText}>
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition. Organically grow the holistic world view of
              disruptive innovation via workplace diversity and empowerment.
            </p>
            <ul className={styles.rating}>
              <li>
                <Image
                  className={styles.ratingStar}
                  src={star}
                  alt="star"
                  width={34}
                  height={34}
                />
              </li>
              <li>
                <Image
                  className={styles.ratingStar}
                  src={star}
                  alt="star"
                  width={34}
                  height={34}
                />
              </li>
              <li>
                <Image
                  className={styles.ratingStar}
                  src={star}
                  alt="star"
                  width={34}
                  height={34}
                />
              </li>
              <li>
                <Image
                  className={styles.ratingStar}
                  src={star}
                  alt="star"
                  width={34}
                  height={34}
                />
              </li>
              <li>
                <Image
                  className={styles.ratingStar}
                  src={star}
                  alt="star"
                  width={34}
                  height={34}
                />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Feedback;
