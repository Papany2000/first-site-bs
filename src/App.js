import React, { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';



function App() {

const {onToogleButton} = useTelegram()

  return (
    <div className="App">
      <button onClick={onToogleButton}>Toogle</button>
     <h1>Привет Медвед.</h1>
    </div>
  );
}

export default App;
