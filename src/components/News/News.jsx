import styles from './News.module.css';
import Image from 'next/image';

import line from '../../images/pattern1.png';

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
    </div>
  );
};
export default News;
