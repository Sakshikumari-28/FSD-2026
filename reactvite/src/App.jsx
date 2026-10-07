import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './component/ICard'
import ICardGallery from './component/ICardGallery'
import ImdbCard from './component/ImdbCard'
import StateHandling from './component/StateHandling'

function App() {
  

  return (
    <div>
    
       {/* <ICardGallery /> */}
       {/* <ImdbCard /> */}
     <StateHandling />
    </div>
  )
}

export default App
