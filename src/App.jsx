import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <ul>
        <li><Link to='/' >Home</Link></li>
        <li><Link to='/projects'>Projetos</Link></li>
        <li><Link to='/company'>Empresa</Link></li>
        <li><Link to='/contact'>Contato</Link></li>
      </ul>

      <Container customClass='min-height'>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/projects' element={<NewProject />}></Route>
          <Route path='/company' element={<Company />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </Container>

      <p>Footer</p>
    </Router>
  );
}

export default App;
