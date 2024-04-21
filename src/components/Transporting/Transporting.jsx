import styles from './Transporting.module.css';

const Transporting = () => {
  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.title}>Transporting Across The World</h2>
        <ul className={styles.transportingList}>
          <li className={styles.transportingItemTank}>
            <p className={styles.transportingDetails}>
              Packaging Solutions
              <br />
              <span className={styles.transportingDescription}>
                Premium Tankers
              </span>
            </p>
          </li>
          <li className={styles.transportingItemMoving}>
            <p className={styles.transportingDetails}>
              Contract Logistics
              <br />
              <span className={styles.transportingDescription}>
                Warehouse Management
              </span>
            </p>
          </li>
          <li className={styles.transportingItemTrack}>
            <p className={styles.transportingDetails}>
              Warehouse & Distribution
              <br />
              <span className={styles.transportingDescription}>
                Road Transportation
              </span>
            </p>
          </li>
          <li className={styles.transportingItemWarehouse}>
            <p className={styles.transportingDetails}>
              Specialized Transport
              <br />
              <span className={styles.transportingDescription}>
                Large Warehouse
              </span>
            </p>
          </li>
          <li className={styles.transportingItemShip}>
            <p className={styles.transportingDetails}>
              Liquid Transportation
              <br />
              <span className={styles.transportingDescription}>
                Ocean Transports
              </span>
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.transportingBanner}>
        <button type="button" className={styles.transportingMoreButton}>
          More Work
        </button>
      </div>
    </div>
  );
};

export default Transporting;
