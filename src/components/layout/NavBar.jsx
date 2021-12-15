import {Link} from 'react-router-dom';
import styles from './NavBar.module.css';
import Container from './Container';
import logo from '../../img/costs_logo.png';

function NavBar(){
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to='/'><img src={logo} alt='Logo' title='Logo'/></Link>
                <ul className={styles.list}>
                    <li><Link className={styles.listItem} to='/' >Home</Link></li>
                    <li><Link className={styles.listItem} to='/projects'>Projetos</Link></li>
                    <li><Link className={styles.listItem} to='/company'>Empresa</Link></li>
                    <li><Link className={styles.listItem} to='/contact'>Contato</Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavBar;