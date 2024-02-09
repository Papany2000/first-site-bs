
import './App.css';
import Header from './Header/Header';
import { Route, Routes } from 'react-router-dom';
import FormProductList from './Forma/FormProduct';
import { useTelegram } from './hooks/useTelegram';
import React from 'react';
import ProductList from './ProductList/ProductList';


function App() {



const {tg} = useTelegram()
React.useEffect(() => {
  tg.ready()
}, [])


  return (
    <div className="App">
     <Header/>
     <Routes>
        <Route index element = {<ProductList/>}/>
        <Route path='/form' element = {<FormProductList/>}/>
     </Routes>
    </div>
  );
}

export default App;
