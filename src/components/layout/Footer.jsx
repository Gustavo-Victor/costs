import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
import styles from './Footer.module.css';


function Footer(){
    return (
        <footer className={styles.footer}>
            <ul className={styles.socialMedia}>
                <li><a target='_blank' href='https://facebook.com'><FaFacebook/></a></li>
                <li><a target='_blank' href='https://twitter.com'><FaTwitter/></a></li>
                <li><a target='_blank' href='https://instagram.com'><FaInstagram/></a></li>
            </ul>
            <p className={styles.copyRight}><span>Costs</span> &copy; 2021</p>
        </footer>
    )
}

export default Footer;