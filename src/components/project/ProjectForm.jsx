import {useState, useEffect} from 'react';
import styles from './ProjectForm.module.css';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function ProjectForm({btnText, handleSubmit, projectData}){
    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {});
    
    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {setCategories(data)})
        .catch((err) => console.log(err));
    }, []); 

    const submit = (e) => {
        handleSubmit(project);
        e.preventDefault();
    }

    const handleChange = (e) => {
        setProject({...project, [e.target.name]:e.target.value});
    }

    const handleCategory = (e) => {
        setProject({...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        }});
    }


    return (
        <form id='mainForm' className={styles.form} onSubmit={submit}>            
            <Input type='text' name='name' id='name' placeholder='Digite o nome do projeto...' text='Projeto' value={project.name || ''} handleOnChange={handleChange} />

            <Input type='number' name='budget' id='budget' placeholder='Digite o orçamento do projeto...' text='Orçamento' value={project.budget || ''} handleOnChange={handleChange}  />

            <Select name='category_id' text='Categoria' value={project.category ? project.category.id : ''} id='category_id' handleOnChange={handleCategory}  options={categories} />

            <SubmitButton id='submit' name='submit' text={btnText} />
        </form>
    );
};

export default ProjectForm;