import styles from './ProjectForm.module.css';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function ProjectForm({btnText}){
    return (
        <form className={styles.form}>            
            <Input type='text' name='name' id='name' placeholder='Digite o nome do projeto...' text='Projeto'  />

            <Input type='number' name='budget' id='budget' placeholder='Digite o orçamento do projeto...' text='Orçamento'  />

            <Select text='Categoria' id='category_id' name='category_id' />

            <SubmitButton id='submit' name='submit' text={btnText} />
        </form>

    )
}

export default ProjectForm;