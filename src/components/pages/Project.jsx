import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Project.module.css';
import Loading from '../layout/Loading';
import Container from '../layout/Container';
import ProjectForm from '../project/ProjectForm';
import Message from '../layout/Message';

function Project(){

    const {id} = useParams();
    const [project, setProject] = useState([]); 
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [message, setMessage] = useState('');
    const [type, setType] = useState('');

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            })
              .then((resp) => resp.json())
              .then((data) => {
                setProject(data)
                //setServices(data)
              })}, 1000,
        )
      }, [id])

    function toggleProjectForm(){
        //window.alert('olá mundo');
        setShowProjectForm(!showProjectForm);
    }

    function editProject(project){
        //window.alert('Clicou em editar!');
        //console.log(project);
        //buget validation
        if(project.budget < project.cost){
            //mensagem
            setType('error');
            setMessage('O orçamento não pode ser menor do que o custo...');
            return false;
        }

        fetch('http://localhost:5000/projects/'+project.id, {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(project)
        }).then((resp)=>resp.json())
        .then((data)=>{
            setProject(data)
            setShowProjectForm(false)
            //mensagem
            setMessage('Projeto atualizado com sucesso!');
            setType('success');
        })
        .catch((err)=>console.log(err));
    }

    return (
        <>
            {project.name ? (
                <div className={styles.project_details}>
                    <Container customClass='column'>
                        {message && <Message type={type} text={message} /> }
                        <div className={styles.details_container}>
                            <h1>{project.name}</h1>
                            <button className={styles.btn} onClick={toggleProjectForm}>{!showProjectForm ? 'Editar projeto':'Fechar'}</button>
                            {!showProjectForm ? (
                                <div className={styles.project_info}>
                                    <p><span>Categoria: </span>{project.category.name}</p>
                                    <p><span>Orçamento: </span>R$ {project.budget}</p>
                                    <p><span>Total: </span>R$ {project.cost}</p>
                                </div>
                            ) : (
                                <div className={styles.project_info}>
                                    <ProjectForm btnText ='Editar projeto' handleSubmit={editProject} projectData={project} />
                                </div>
                            )}
                        </div>
                    </Container>
                </div>
            ) : ( <Loading /> )}
        </>
    );
};

export default Project;