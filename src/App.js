import './App.css';

//Components
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import ItemContainer from './components/ItemContainer/ItemContainer';



const App = () => {
    return (
      <div className='App'>
        <NavBar/>
        <Header 
        title='El sitio que vos quieras' 
        subtitle='Lo podés imaginar, lo podés hacer'/>

        <div className='UserSection'><ItemContainer/></div>

      </div>
    );
}


export default App;
