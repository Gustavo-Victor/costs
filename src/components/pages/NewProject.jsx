//import {useHistory} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import styles from './NewProject.module.css';
import ProjectForm from '../project/ProjectForm';
import Message from '../layout/Message';
import { useState } from 'react';
import Container from '../layout/Container';

function NewProject(){
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [type, setType] = useState('');

    function createPost(project){
        setMessage('');            
        //initialize cost and services 
        project.cost = 0;
        project.services = [];

        //corrigindo bug 
        if(!'category' in project){
            project.category = {};
            project.category.id = 1;
            project.category.name = 'Desenvolvimento'
        }

        console.log(project);

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
        .then((response) => response.json())
        .then((data) => {
            //message and redirect
            setType('success');
            setMessage('Projeto cadastrado com sucesso!');

            setTimeout(() => {navigate('/projects');}, 2000);
            console.log(data);
            //window.alert('Projeto cadastrado com sucesso!');
        })
        .catch((err) => console.log(err));
    }

    return (
        <>
            {message && <Message top={'1rem'} text={message} type={type} />}
            <div className={styles.newProjectContainer}>
                <h1>Criar projeto</h1>
                <p>Crie seu projeto para depois adicionar os serviços... </p>
                <ProjectForm handleSubmit={createPost} btnText='Criar projeto' projectData={{}} />
            </div>
        </>
    );
};

export default NewProject;