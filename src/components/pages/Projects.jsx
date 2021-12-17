import {useLocation} from 'react-router-dom';
import Message from "../layout/Message";
import styles from './Projects.module.css';
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';


function Projects(){
    const location = useLocation();
    let mes = '';
    if(location.state){
        mes = location.state.message;
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus projetos</h1>
                <LinkButton to='/newproject' text='Criar projeto'/>
            </div>            
            {mes && (<Message type='success' text={mes} />)}
            <Container customClass='start'>
                <p>Projetos...</p>
            </Container>
        </div>
    );
};

export default Projects;