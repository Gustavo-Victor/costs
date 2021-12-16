//import {useHistory} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import styles from './NewProject.module.css';
import ProjectForm from '../project/ProjectForm';

function NewProject(){
    const history = useNavigate();

    function createPost(project){    
        //initialize cost and services 
        project.cost = 0;
        project.services = [];

        fetch('http://localhost:5000/projects', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            //redirect
            history('/projects', {message: 'Projeto criado com sucesso!'});
            console.log(history);
        })
        .catch((err) => console.log(err));
    }

    return (
        <div className={styles.newProjectContainer}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços... </p>
            <ProjectForm handleSubmit={createPost} btnText='Criar projeto' />
        </div>
    );
};

export default NewProject;