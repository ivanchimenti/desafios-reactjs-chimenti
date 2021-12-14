import './App.css';

//Components
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header';
import ItemContainer from './components/ItemContainer/ItemContainer';
import CardContainer from './components/CardContainer/CardContainer';


const App = () => {
    return (
      <div className='App'>
        <NavBar/>
        <Header title='El sitio que vos quieras' subtitle='Podes soñarlo, podes hacerlo'/>
        <h1>My Random Page</h1>
        <CardContainer/>
        <div className='UserSection'><ItemContainer/></div>
    
      </div>
    );
}


export default App;
