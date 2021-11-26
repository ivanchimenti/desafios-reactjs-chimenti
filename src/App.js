import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

//Components
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import UserCard from './components/UserCard/UserCard';
// import CardContainer from './components/CardContainer/CardContainer';
//Images
import atm from './Images/atm-titular-1.jpg';
import barca from './Images/barcelona-titular-1.jpg';
import rm from './Images/rm-titular-1.jpg';
import juve from './Images/juventus-titular-1.jpg';
import inter from './Images/inter-titular-1.jpg';
import milan from './Images/milan-titular-1.jpg';
import chelsea from './Images/chelsea-titular-1.jpg';
import city from './Images/city-titular-1.jpg';
import liverpool from './Images/liverpool-titular-1.jpg';
import united from './Images/united-titular-1.jpg';
import psg from './Images/psg-titular-1.jpg';
import bayern from './Images/bayern-titular-1.jpg';



class App extends React.Component {
  render() {
    return (
      <div className='App'>

        <NavBar/>

        <Header 
        title='El sitio que vos quieras' 
        subtitle='Lo podés imaginar, lo podés hacer'/>

        <div className='UserSection'>

          <UserCard 
            name='Atlético de Madrid Home 2021/22'
            cod='01234568'
            description='Camiseta Titular del Atlético de Madrid Temporada 2021/22'
            img= {atm}
            precio={4500}
            stock={10}
            />
            
            <UserCard 
            name='Barcelona Home 2021/22'
            cod='01234569'
            description='Camiseta Titular del Barcelona Temporada 2021/22'
            img= {barca}
            precio={4500}
            stock={10}
            />

            <UserCard 
            name='Real Madrid Home 2021/22'
            cod='01234567'
            description='Camiseta Titular del Real Madrid Temporada 2021/22'
            img= {rm}
            precio={4500}
            stock={10}
            />

            <UserCard 
            name='Juventus Home 2021/22'
            cod='01234570'
            description='Camiseta Titular de la Juventus Temporada 2021/22'
            img= {juve}
            precio={4500}
            stock={10}
            />
            
            <UserCard 
            name='Inter Home 2021/22'
            cod='01234559'
            description='Camiseta Titular del Inter Temporada 2021/22'
            img= {inter}
            precio={4500}
            stock={10}
            />

            <UserCard 
            name='Milan Home 2021/22'
            cod='01234596'
            description='Camiseta Titular del Milan Temporada 2021/22'
            img= {milan}
            precio={4500}
            stock={10}
            />

            <UserCard 
            name='Chelsea Home 2021/22'
            cod='01234571'
            description='Camiseta Titular del Chelsea Temporada 2021/22'
            img= {chelsea}
            precio={4500}
            stock={10}
            />
            
            <UserCard 
            name='Manchester City Home 2021/22'
            cod='01234523'
            description='Camiseta Titular del Manchester City Temporada 2021/22'
            img= {city}
            precio={4500}
            stock={10}
            />

            <UserCard 
            name='Liverpool Home 2021/22'
            cod='01234555'
            description='Camiseta Titular del Liverpool Temporada 2021/22'
            img= {liverpool}
            precio={4500}
            stock={10}
            />

            <UserCard 
            name='Manchester United Home 2021/22'
            cod='01234577'
            description='Camiseta Titular del Manchester United Temporada 2021/22'
            img= {united}
            precio={4500}
            stock={10}
            />
            
            <UserCard 
            name='PSG Home 2021/22'
            cod='01234569'
            description='Camiseta Titular del PSG Temporada 2021/22'
            img= {psg}
            precio={4500}
            stock={10}
            />

            <UserCard 
            name='Bayern Munich Home 2021/22'
            cod='01234588'
            description='Camiseta Titular del Bayern Munich Temporada 2021/22'
            img= {bayern}
            precio={4500}
            stock={10}
            />
        </div>

        {/* <CardContainer/> */}

      </div>
    );
  }
}

export default App;
