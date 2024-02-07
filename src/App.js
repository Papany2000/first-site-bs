import React, { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Header from './Header/Header';
// const tg = window.Telegram.WebApp


function App() {

const {onToogleButton, tg} = useTelegram()
useEffect(() => {
  tg.ready()
}, [])

  return (
    <div className="App">
      <button onClick={onToogleButton}>Toogle</button>
     <h1>Привет Медвед 22.</h1>
     <Header/>
    </div>
  );
}

export default App;
