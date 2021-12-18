import {Link} from 'react-router-dom';
import './navbar.css';
import Container from './Container';
import logo from '../../img/costs_logo.png';
import {FaBars, FaTimes} from 'react-icons/fa';
import {useState} from 'react';

function NavBar(){
    const [icon, setIcon] = useState(false);

    const handleIcon = () => {
        setIcon(!icon);
    }

    return (
        <nav className='navbar'>
            <Container>
                <Link to='/'><img src={logo} alt='Logo' title='Logo'/></Link>
                
                {!icon ? (
                    <>
                        <span onClick={handleIcon} className={'mainIcon'} ><FaBars/></span>
                        <ul className={'list'}>
                            <li><Link className={'listItem'} to='/' >Home</Link></li>
                            <li><Link className={'listItem'} to='/projects'>Projetos</Link></li>
                            <li><Link className={'listItem'} to='/company'>Empresa</Link></li>
                            <li><Link className={'listItem'} to='/contact'>Contato</Link></li>
                        </ul>
                    </>
                     
                ):(
                    <>
                        <span onClick={handleIcon} className={'mainIcon'} ><FaTimes/></span>
                        <ul className={'list active'}>
                            <li><Link className={'listItem'} to='/' >Home</Link></li>
                            <li><Link className={'listItem'} to='/projects'>Projetos</Link></li>
                            <li><Link className={'listItem'} to='/company'>Empresa</Link></li>
                            <li><Link className={'listItem'} to='/contact'>Contato</Link></li>
                        </ul>
                    </>  
                )}                
                
                
            </Container>
        </nav>
    )
}

export default NavBar;