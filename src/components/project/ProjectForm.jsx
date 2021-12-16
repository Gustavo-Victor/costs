import {useState, useEffect} from 'react';
import styles from './ProjectForm.module.css';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function ProjectForm({btnText}){
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).
        then((resp) => resp.json()).
        then((data) => setCategories(data)).
        catch((err) => console.log(err));
    }, []); 

    return (
        <form className={styles.form}>            
            <Input type='text' name='name' id='name' placeholder='Digite o nome do projeto...' text='Projeto'  />

            <Input type='number' name='budget' id='budget' placeholder='Digite o orçamento do projeto...' text='Orçamento'  />

            <Select text='Categoria' id='category_id' name='category_id' options={categories} />
            <SubmitButton id='submit' name='submit' text={btnText} />
        </form>
    );
};

export default ProjectForm;