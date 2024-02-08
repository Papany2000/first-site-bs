
import './App.css';
import Header from './Header/Header';
import { Route, Routes } from 'react-router-dom';
import ProductList from './Product/ProductList';
import FormProductList from './Forma/FormProduct';
import { useTelegram } from './hooks/useTelegram';
import React from 'react';



function App() {

const {onClose} = useTelegram()
React.useEffect(() => {
  tg.ready()
}, [])


  return (
    <div className="App">
      <button onClick={onClose}> Закрыть</button>
     <Header/>
     <Routes>
        <Route path='/' element = {<ProductList/>}/>
        <Route path='/form' element = {<FormProductList/>}/>
     </Routes>
    </div>
  );
}

export default App;
