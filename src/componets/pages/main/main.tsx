import React from 'react';
import styles from "../main/main.module.scss";
import { Link } from 'react-router-dom';
import Section from "../Cv/section";
import Sosical from '../../sosical/sosical';

type MainProps = {

}

const Main: React.FC<MainProps> = () => {
  return (

    <div className={styles.container}>
      <Section>
        <div className={styles.home}>
          <h1 className={styles.text}>Hi, I am <span className={styles.about_name}>Deni.</span></h1>
          <h2 className={styles.aboute_text}>Software developer</h2>
        </div>

        <Sosical />

        <div className={styles.buttons}>
          <Link to="/proects">My projects</Link>
          <Link to="/cv">More about me</Link>
        </div>
      </Section>
    </div>
  )
}

export default Main
