import {useState, useEffect} from 'react';
import styles from './Message.module.css';

function Message({type, text, top}){
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if(!text){
            setVisible(false);
            return;
        }

        setVisible(true);
        const timer = setTimeout(() => setVisible(false), 3000);
        return () => clearTimeout(timer);
    }, [text]);

    return (
        <>
            {visible && (
                <div style={{marginTop: top}} className={`${styles.message} ${styles[type]}`}>{text}</div>
            )}
        </>
    );
};


export default Message;