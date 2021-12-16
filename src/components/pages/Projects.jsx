import {useLocation} from 'react-router-dom';
import Message from "../layout/Message";


function Projects(){
    const location = useLocation();
    let mes = '';
    if(location.state){
        mes = location.state.message;
    }

    return (
        <div>
            <h1>Meus Projetos</h1>            
            {mes != '' && (<Message type='success' text={mes} />)}
        </div>
    );
};

export default Projects;