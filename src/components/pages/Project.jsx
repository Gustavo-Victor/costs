import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Project.module.css';
import Loading from '../layout/Loading';
import Container from '../layout/Container';
import ProjectForm from '../project/ProjectForm';
import Message from '../layout/Message';
import ServiceForm from '../services/ServiceForm';
import {parse, v4 as uuidv4} from 'uuid';
import ServiceCard from '../services/ServiceCard';

function Project(){

    const {id} = useParams();
    const [project, setProject] = useState([]); 
    const [services, setServices] = useState([]);
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [showServiceForm, setShowServiceForm] = useState(false);
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
                setProject(data);
                setServices(data.services);
              })}, 1000,
        )
      }, [id])

    function toggleProjectForm(){
        //window.alert('olá mundo');
        setShowProjectForm(!showProjectForm);
    }

    function toggleServiceForm(){
        setShowServiceForm(!showServiceForm);
    }

    function editProject(project){
        setMessage('');
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

    function createService(project){
        //window.alert('clicou em cadastrar serviço!');
        //lastService 
        const qtdService = project.services.length;
        const lastService = project.services[qtdService-1];
        lastService.id = uuidv4();
        const lastServiceCost = lastService.cost;
        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

        //maximum value validation 
        if(newCost > parseFloat(project.budget)){
            setMessage('Orçamento ultrapassado! Verifique o valor do serviço...')
            setType('error');
            project.services.pop();
            return false;
        }

        //add service cost to project total cost 
        project.cost = newCost;

        //update project 
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(project)
        }).then((resp) => resp.json())
            .then((data) => {
                setShowServiceForm(false);
                setMessage('Serviço cadastrado com sucesso!');
                setType('success');
                console.log(data);
            })
            .catch((err) => console.log(err));        
    }

    function removeService(id, cost){
        setMessage('');
        //window.alert(`Clicou para remover o serviço ${id}`);
        const servicesUpdated = project.services.filter((service) => service.id !== id);
        const projectUpdated = project;
        projectUpdated.services = servicesUpdated;
        projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost); 
        //console.log(projectUpdated);
        
        fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(projectUpdated)
        }).then(resp => resp.json()).then(
            (data) => {
                setProject(projectUpdated);
                setServices(servicesUpdated);
                setMessage('Serviço excluído com sucesso!');
                setType('success');
                console.log(data);
            }
        ).catch((err) => console.log(err));
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
                        <div className={styles.service_form_container}>
                            <h2>Adicione um serviço</h2>
                            <button className={styles.btn} onClick={toggleServiceForm}>{!showServiceForm ? 'Adicionar serviço':'Fechar'}</button>
                            <div className={styles.project_info}>
                                {showServiceForm && (
                                    <ServiceForm handleSubmit={createService}  projectData={project} btnText={'Criar serviço'} />
                                )}
                            </div>
                        </div>
                        <h2>Serviços</h2>
                        <Container customClass='start'>
                            {services.length > 0 ? (
                                services.map((service) => (
                                    <ServiceCard
                                     id={service.id}
                                    name={service.service} 
                                    cost={service.cost} 
                                    description={service.description}
                                    key={service.id}
                                    handleRemove={removeService} />
                                ))   
                            ):(
                                <p>Não há serviços para este projeto...</p>
                            )}
                        </Container>
                    </Container>
                </div>
            ) : ( <Loading /> )}
        </>
    );
};

export default Project;