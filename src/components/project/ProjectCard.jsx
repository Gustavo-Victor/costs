import styles from './ProjectCard.module.css';
import {BsPencil, BsFillTrashFill} from 'react-icons/bs';
import {Link} from 'react-router-dom';

function ProjectCard({id, name, budget, category, handleRemove}){

    function remove(event) {
        event.preventDefault();
        handleRemove(id);
        console.log(id);
    }

    return (
        <div className={styles.project_card} id={'Card' + id}>
            <h4>{name}</h4>
            <p><span>Orçamento: </span>R$ {budget}</p>
            <p className={styles.category_text}>
                <span className={styles[`${category.toLowerCase()}`]}></span>
                {category}
            </p>
            <div className={styles.project_card_actions}>
                <Link to={'/project/' + id}>
                    <button>
                        <BsPencil style={{color: 'green'}} /> Editar
                    </button>
                </Link>
                <Link to='/'>
                    <button onClick={remove}>
                        <BsFillTrashFill style={{color: 'red'}}/> Excluir    
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard;