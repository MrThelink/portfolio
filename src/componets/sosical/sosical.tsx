import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './sosical.module.scss';

const Sosical: React.FC = () => {

    return (
        <div className={styles.container}>
            <div className={styles.someButton}>
                <a href='https://github.com/MrThelink' target='_blank'>
                    <FaGithub size={40} cursor="pointer"/>
                </a>
            </div>
            <div className={styles.someButton}>
                <a href='https://www.linkedin.com/'>
                     <FaLinkedin size={40} cursor="pointer" target='_blank'/>
                </a>
            </div>
            <div className={styles.someButton}>
                <a href="https://www.instagram.com/d7enii/" target='_blank'>
                    <FaInstagram size={40} cursor="pointer"/>
                </a>
            </div>
        </div>
    )
}

export default Sosical;