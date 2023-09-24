import styles from './Hero.module.css';

import Link from 'next/link';

import Facebook from '../Facebook';
import Instagram from '../Instagram';
import Twitter from '../Twitter';
import Linkedin from '../Linkedin';

const Hero = () => {
  return (
    <div>
      <div className={styles.container}>
        <div>
          <ul className={styles.hero_list}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/pages">Pages</Link>
            </li>
            <li>
              <Link href="/project">Project</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <button>
            <Instagram />
          </button>
          <button>
            <Facebook />
          </button>
          <button>
            <Twitter />
          </button>
          <button>
            <Linkedin />
          </button>
        </div>
        <button type="button">Request Quote</button>
      </div>
      <h3>Protection</h3>
      <h1>Password Protection</h1>
    </div>
  );
};

export default Hero;
