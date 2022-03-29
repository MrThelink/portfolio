import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './sosical.module.scss';

const Sosical: React.FC = () => {

    return (
        <div className={styles.container}>
            <div className={styles.someButton}>
                <a href='https://github.com/MrThelink' target='_blank' rel="noreferrer">
                    <FaGithub size={40} cursor="pointer"/>
                </a>
            </div>
            <div className={styles.someButton}>
                <a href='https://www.linkedin.com/' target='_blank' rel="noreferrer">
                     <FaLinkedin size={40} cursor="pointer"/>
                </a>
            </div>
            <div className={styles.someButton} >
                <a href="https://www.instagram.com/d7enii/" target='_blank' rel="noreferrer" >
                    <FaInstagram size={40} cursor="pointer"/>
                </a>
            </div>
        </div>
    )
}

export default Sosical;