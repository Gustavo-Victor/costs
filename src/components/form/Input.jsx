import styles from './Input.module.css';

function Input({type, text, name, id, placeholder, handleOnChange, value}){
    return (
        <div className={styles.form_control}>
            <label htmlFor={id}>{text}</label>
            <input required type={type} name={name} id={id} placeholder={placeholder} value={value} onChange={handleOnChange} />
        </div>
    );
};

export default Input;