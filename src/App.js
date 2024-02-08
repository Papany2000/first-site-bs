import React, { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Header from './Header/Header';
import { Route, Routes } from 'react-router-dom';
import ProductList from './Product/ProductList';
import FormProductList from './Forma/FormProduct';



function App() {

const {tg} = useTelegram()
useEffect(() => {
  tg.ready()
}, [])

  return (
    <div className="App">
     <Header/>
     <Routes>
        <Route  path='form' element={<ProductList/>}/>
        <Route index element={<FormProductList/>}/>
     </Routes>
    </div>
  );
}

export default App;
