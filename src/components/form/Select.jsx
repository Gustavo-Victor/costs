import styles from './Select.module.css';

function Select({text, name, id, options, handleOnChange, value}){
    return (
        <div className={styles.form_control}>
            <label htmlFor={id}>{text}</label>
            <select name={name} id={id} onChange={handleOnChange} required value={value || ''}>
                <option>Selecione uma opção</option>
                {options.length > 0 && (
                    options.map(options => (
                        <option value={options.id} key={options.id}>
                          {options.name}
                        </option> 
                        )
                    )
                )} 
            </select>
        </div>
    );
};

export default Select;