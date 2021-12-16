import styles from './SubmitButton.module.css';

function SubmitButton({text, name, id}){
    return (
        <div>
            <button className={styles.btn} name={name} id={id}>{text}</button>
        </div>
    )
}

export default SubmitButton;