import './App.css'
import Header from './Header/Header'

import Card from './Card/Card'
import "./Card/Card.css"

import Menu from './Menu/Menu'
import "./Menu/Menu.css"

import React, { useState } from 'react'

const arrayOfArtisans = [
  {
    title: "Electricien",
    speciality: "electrician",
    imgSrc: "https://cdn.pixabay.com/photo/2017/09/16/14/33/electrician-2755683_1280.jpg",
    color: "lightblue"
  },
  {
    title: "Plombier",
    speciality: "plumber",
    imgSrc: "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
    color: "lightgrey"
  },
  {
    title: "Chauffagiste",
    speciality: "heating",
    imgSrc: "https://cdn.pixabay.com/photo/2014/09/27/16/59/heating-463904_960_720.jpg",
    color: "lightcoral"
  },
]

function App() {

  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  // Trouve l'artisan sélectionné
  const selectedArtisan = arrayOfArtisans.find(
    (artisan) => artisan.title === selectedOption
  );
  
  return (
    
    <>
      <Header />
      <h1>Artisan Rénovation</h1>

      <Menu selectedOption={selectedOption} handleChange={handleChange}/>
      
      <main className="app">
        {arrayOfArtisans.map((element) => {
          const isSelected = element.title === selectedOption;

          return (
            <Card 
              key={element.speciality}
              title={element.title} 
              speciality={element.speciality} 
              imgSrc={element.imgSrc} 
              bgColor={isSelected ? element.color : undefined}
            />
          );
        })}
      </main>
      </>
  )
}

export default App
