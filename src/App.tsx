import './App.css'
import Header from './Header/Header'

import Card from './Card/Card'
import "./Card/Card.css"
import Footer from './Footer/Footer'
import { useState } from 'react'

const arrayOfArtisans = [
  {
    title: "Electricien",
    speciality: "electrician",
    imgSrc: "https://cdn.pixabay.com/photo/2017/09/16/14/33/electrician-2755683_1280.jpg",
    description: "Soucieux de sécurité, l'électricien installateur réalise les installations électriques des maisons, des immeubles, des usines ou des centres commerciaux. Désormais, il s'occupe aussi de la pose de câbles informatiques, d'équipements de vidéosurveillance et de téléphonie.",
    etudes: "CAP ou équivalent",
    salaire: "1802€"
  },
  {
    title: "Plombier",
    speciality: "plumber",
    imgSrc: "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg",
    description: "Un robinet qui fuit, un évier bouché, un chauffe-eau en panne... On a toujours besoin d'un plombier ! Le métier requiert une bonne condition physique, mais aussi une capacité à analyser la situation et à choisir la bonne méthode d'intervention.",
    etudes: "CAP ou équivalent",
    salaire: "1802€"
  },
  {
    title: "Chauffagiste",
    speciality: "heating",
    imgSrc: "https://cdn.pixabay.com/photo/2014/09/27/16/59/heating-463904_960_720.jpg",
    description: "Le technicien de maintenance en génie climatique surveille le fonctionnement des équipements techniques et assure leur entretien et leur dépannage. Toujours disponible, il apporte une solution rapide et efficace aux clients victimes d'une panne.",
    etudes: "BAC ou équivalent",
    salaire: "1900€"
  },
]

function App() {
  const [metierInfo, setMetierInfo] = useState()
  function onCardClick()

  return (

    <>
      <Header />

      <h1>Artisan Rénovation</h1>

      <main className='app'>
        {arrayOfArtisans.map((element) => {
          return (
            <Card title={element.title} speciality={element.speciality} imgSrc={element.imgSrc} />
          )
        })}
      </main>

      <Footer />
    </>
  )
}

export default App
