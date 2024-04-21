import styles from './Team.module.css';
import Image from 'next/image';

import line from '../../images/pattern1.png';
import employee from '../../images/employee.png';
import employee1 from '../../images/employee1.png';
import employee2 from '../../images/employee3.png';
import twitterIcon from '../../images/twitter-icon.png';
import facebookIcon from '../../images/facebook-icon.png';
import instagramIcon from '../../images/instagram-icon.png';
import linkedinIcon from '../../images/linkedin-icon.png';

const Team = () => {
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
          <h3 className={styles.title}>The Transporters</h3>
        </div>
        <h2 className={styles.header}>Meet Expert Team</h2>
      </div>
      <ul className={styles.teamList}>
        <li className={styles.teamMember}>
          <Image
            className={styles.teamMemberImage}
            src={employee}
            alt="team member image"
            width={364}
            height={426}
          />
          <div className={styles.teamInfo}>
            <div className={styles.employeeDescription}>
              <p className={styles.teamMemberName}>Jessca Arow</p>
              <p className={styles.teamMemberPosition}>Designer</p>
            </div>

            <ul className={styles.social}>
              <li className={styles.socialIcon}>
                <Image
                  className={styles.icon}
                  src={twitterIcon}
                  alt="twitter icon"
                  width={22}
                  height={18}
                />
              </li>
              <li className={styles.socialIcon}>
                <Image
                  className={styles.icon}
                  src={facebookIcon}
                  alt="facebook icon"
                  width={23}
                  height={20}
                />
              </li>
              <li className={styles.socialIcon}>
                <Image
                  className={styles.icon}
                  src={instagramIcon}
                  alt="instagram icon"
                  width={22}
                  height={22}
                />
              </li>
            </ul>
          </div>
        </li>
        <li className={styles.teamMember}>
          <Image
            className={styles.teamMemberImage}
            src={employee1}
            alt="team member image"
            width={364}
            height={426}
          />

          <div className={styles.teamInfo}>
            <div className={styles.employeeDescription}>
              <p className={styles.teamMemberName}>Kathleen Smith</p>
              <p className={styles.teamMemberPosition}>Designer</p>
            </div>
            <ul className={styles.social}>
              <li className={styles.socialIcon}>
                <Image
                  className={styles.icon}
                  src={linkedinIcon}
                  alt="linkedin icon"
                  width={22}
                  height={22}
                />
              </li>
              <li className={styles.socialIcon}>
                <Image
                  className={styles.Icon}
                  src={twitterIcon}
                  alt="twitter icon"
                  width={22}
                  height={18}
                />
              </li>
              <li className={styles.socialIcon}>
                <Image
                  className={styles.Icon}
                  src={facebookIcon}
                  alt="facebook icon"
                  width={23}
                  height={20}
                />
              </li>
              <li className={styles.socialIcon}>
                <Image
                  className={styles.icon}
                  src={instagramIcon}
                  alt="instagram icon"
                  width={22}
                  height={22}
                />
              </li>
            </ul>
          </div>
        </li>
        <li className={styles.teamMember}>
          <Image
            className={styles.teamMemberImage}
            src={employee2}
            alt="team member image"
            width={364}
            height={426}
          />

          <div className={styles.teamInfo}>
            <div className={styles.employeeDescription}>
              <p className={styles.teamMemberName}>Rebecca Tylor</p>
              <p className={styles.teamMemberPosition}>Designer</p>
            </div>
            <ul className={styles.social}>
              <li className={styles.socialIcon}>
                <Image
                  className={styles.icon}
                  src={facebookIcon}
                  alt="facebook icon"
                  width={23}
                  height={20}
                />
              </li>
              <li className={styles.socialIcon}>
                <Image
                  className={styles.icon}
                  src={instagramIcon}
                  alt="instagram icon"
                  width={22}
                  height={22}
                />
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Team;
