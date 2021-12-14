import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

//Components
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import CardComponent from './components/CardComponent/CardComponent';
import Spinner from './components/Spinner/Spinner';
// import UserCard from './components/UserCard/UserCard';
// import CardContainer from './components/CardContainer/CardContainer';

const App = () => {

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  //   fetch('https://api.nasa.gov/planetary/apod?api_key=EZzOrBX5Fe85d1TYgLql6v3T6eLPCWnVHyaBUnad')
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));

  setIsLoading(true);

  axios
    .get('https://api.nasa.gov/planetary/apod?api_key=EZzOrBX5Fe85d1TYgLql6v3T6eLPCWnVHyaBUnad')
    .then((res) => setData(res.data));
    
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

}, []);

  return (
    <div className='App'>

      <NavBar/>

      <Header 
      title='El sitio que vos quieras' 
      subtitle='Lo podés imaginar, lo podés hacer'/>

      {isLoading ? <Spinner/> : <CardComponent data={data}/>}

    </div>
  );
};

export default App;
