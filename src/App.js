import React from 'react';
import './App.css';

//Components
import Header from './components/Header/Header';
import UserCard from './components/UserCard/UserCard';
import NavBar from './components/Navbar/NavBar';
//Images
import atm from './components/Images/atm-titular-1.jpg';
import barca from './components/Images/barcelona-titular-1.jpg';
import rm from './components/Images/rm-titular-1.jpg';



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
          />
          
          <UserCard 
          name='Barcelona Home 2021/22'
          cod='01234569'
          description='Camiseta Titular del Barcelona Temporada 2021/22'
          img= {barca}
          />

          <UserCard 
          name='Real Madrid Home 2021/22'
          cod='01234567'
          description='Camiseta Titular del Real Madrid Temporada 2021/22'
          img= {rm}
          />

          <UserCard 
          name='Juventus Home 2021/22'
          cod='01234570'
          description='Camiseta Titular de la Juventus Temporada 2021/22'
          img='./components/Images/juventus-titular-1.jpg'
          />
          
          <UserCard 
          name='Inter Home 2021/22'
          cod='01234559'
          description='Camiseta Titular del Inter Temporada 2021/22'
          img='./components/Images/inter-titular-1.jpg'
          />

          <UserCard 
          name='Milan Home 2021/22'
          cod='01234596'
          description='Camiseta Titular del Milan Temporada 2021/22'
          img='./components/Images/milan-titular-1.jpg'
          />

          <UserCard 
          name='Chelsea Home 2021/22'
          cod='01234571'
          description='Camiseta Titular del Chelsea Temporada 2021/22'
          img='./components/Images/chelsea-titular-1.jpg'
          />
          
          <UserCard 
          name='Manchester City Home 2021/22'
          cod='01234523'
          description='Camiseta Titular del Manchester City Temporada 2021/22'
          img='./components/Images/city-titular-1.jpg'
          />

          <UserCard 
          name='Liverpool Home 2021/22'
          cod='01234555'
          description='Camiseta Titular del Liverpool Temporada 2021/22'
          img='./components/Images/liverpool-titular-1.jpg'
          />

          <UserCard 
          name='Manchester United Home 2021/22'
          cod='01234577'
          description='Camiseta Titular del Manchester United Temporada 2021/22'
          img='./components/Images/united-titular-1.jpg'
          />
          
          <UserCard 
          name='PSG Home 2021/22'
          cod='01234569'
          description='Camiseta Titular del PSG Temporada 2021/22'
          img='./components/Images/psg-titular-1.jpg'
          />

          <UserCard 
          name='Bayern Munich Home 2021/22'
          cod='01234588'
          description='Camiseta Titular del Bayern Munich Temporada 2021/22'
          img='./components/Images/bayern-titular-1.jpg'
          />
        </div>


      </div>
    );
  }
}

export default App;
