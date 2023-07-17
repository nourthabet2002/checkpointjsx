import React from 'react'
import Cards from"./Cards";
import './App.css';
import card from './Card';
const App = () => {
  
    const player = [{
      name: "ronaldo",
      age : 38,
      country: "portugal",
      photo: "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Ftherealchamps.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1436713160.jpeg",
      
    },
    {
      name:"neymar",
      age : 31,
      country:"brésil",
      photo: "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Ftherealchamps.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1436713160.jpeg",
    },
     {
      name: "zaydane",
      age : 51,
      country:"france",
      photo: "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Ftherealchamps.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1436713160.jpeg",
    }, 
    {
      name: "messi",
      age :36 ,
      country:"argentine",
      photo:"https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Ftherealchamps.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1436713160.jpeg",
    }];
  return (
    <div className='App'>
      <Cards player={player}/>
      
    </div>
  )
}

export default App

