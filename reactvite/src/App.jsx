import { useState } from 'react';
import heroImg from './assets/hero.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';

import ICard from './component/ICard';
import ICardGallery from './component/ICardGallery';
import ImdbCard from './component/ImdbCard';
import StateHandling from './component/StateHandling';
import Imagemanipulation from './component/Imagemanipulation';
import SampleuseEffect from './component/SampleuseEffect';
import Shopping from './component/Shopping';

function App() {
return ( <div>
{/* <ICard /> */}
{/* <ICardGallery /> */}
{/* <ImdbCard /> */}
{/* <StateHandling /> */}
{/* <Imagemanipulation /> */}
{/* <SampleuseEffect /> */}

        <Shopping />
    </div>
);


}

export default App;
