import './App.css'

import Card from './Card/Card'
import "./Card/Card.css"

const arrayOfArtisans = [
  {
    title: "Eléctricien",
    speciality: "electrician",
    imgSrc: "https://cdn.pixabay.com/photo/2017/09/16/14/33/electrician-2755683_1280.jpg"
  },
  {
    title: "Plombier",
    speciality: "plumber",
    imgSrc: "https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg"
  },
  {
    title: "Chauffagiste",
    speciality: "heating",
    imgSrc: "https://cdn.pixabay.com/photo/2014/09/27/16/59/heating-463904_960_720.jpg"
  },
]

function App() {
  
  return (
    <>
      <main className='app'>
        {arrayOfArtisans.map((element) => {
          return (
            <Card title={element.title} speciality={element.speciality} imgSrc={element.imgSrc} />
          )
        })}
      </main>
    </>
  )
}

export default App
