import react from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './sosical.module.scss';

const Sosical: React.FC = () => {

    return (
        <div className={styles.container}>
            <div className={styles.someButton}>
                <FaGithub size={40} />
            </div>
            <div className={styles.someButton}>
                <FaLinkedin size={40} />
            </div>
            <div className={styles.someButton}>
                <FaInstagram size={40} />
            </div>
        </div>
    )
}

export default Sosical;
