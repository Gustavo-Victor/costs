import styles from '../project/ProjectCard.module.css';
import {BsFillTrashFill} from 'react-icons/bs';

function ServiceCard({id, name, cost, description, handleRemove}){

    function remove(e){
        e.preventDefault();
        handleRemove(id, cost);
    }

    return (
        <div id={id} className={styles.project_card}>
            <h4>{name}</h4>
            <p><span>Custo: </span>R${cost}</p>
            <p>{description}</p>
            <div className={styles.project_card_actions}>
                <button onClick={remove}>
                    <BsFillTrashFill /><span>Excluir</span>
                </button>
            </div>
        </div>
    );
};

export default ServiceCard;