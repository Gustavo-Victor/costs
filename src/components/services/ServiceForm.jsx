import styles from '../project/ProjectForm.module.css';
import {useState} from 'react';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

function ServiceForm({btnText, handleSubmit, projectData}){
    const [service, setService] = useState({});

    function submit(e){
        e.preventDefault();
        projectData.services.push(service);
        handleSubmit(projectData);
        console.log(projectData);
    }

    function handleChange(e){
        setService({...service, [e.target.name]: e.target.value}); 
        //console.log(service);
    }

    return (
        <form className={styles.form} onSubmit={submit} method="POST" id='serviceForm'>
            <Input  type='text' text='Nome' name='service' id='service' placeholder='Digite o nome do serviço...' handleOnChange={handleChange}/>

            <Input  type='number' text='Custo' name='cost' id='cost' placeholder='Digite o valor total...' handleOnChange={handleChange}/>

            <Input  type='text' text='Descrição' name='description' id='description' placeholder='Digite uma descrição...' handleOnChange={handleChange}/>

            <SubmitButton text={btnText} name='newService' id='newService' />
        </form>
    );
};

export default ServiceForm;