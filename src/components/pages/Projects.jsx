import {useLocation} from 'react-router-dom';
import Message from "../layout/Message";
import styles from './Projects.module.css';
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';
import ProjectCard from '../project/ProjectCard';
import { useState, useEffect } from 'react';


function Projects(){
    const [projects, setProjects] = useState([]);

    const location = useLocation();
    let mes = '';
    if(location.state){
        mes = location.state.message;
    }

    useEffect(()=> {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        }).
        then((response) => response.json()).
        then((data) => {
            console.log(data);
            setProjects(data);
        }).
        catch((err) => console.log(err));
    }, []);

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus projetos</h1>
                <LinkButton to='/newproject' text='Criar projeto'/>
            </div>            
            {mes && (<Message type='success' text={mes} />)}
            <Container customClass='start'>
                {projects.length > 0 && (
                    projects.map((project) => (
                        <ProjectCard key={project.id} id={project.id} name={project.name} budget={project.budget} category={project.category.name} />
                    ))
                )}
            </Container>
        </div>
    );
};

export default Projects;