import styles from './NewProject.module.css';
import ProjectForm from '../project/ProjectForm';

function NewProject(){
    return (
        <div className={styles.newProjectContainer}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços... </p>
            <ProjectForm />
        </div>
    );
};

export default NewProject;