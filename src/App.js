
import './App.css';
import Header from './Header/Header';
import { Route, Routes } from 'react-router-dom';
import ProductList from './Product/ProductList';
import FormProductList from './Forma/FormProduct';
import { useTelegram } from './hooks/useTelegram';
import React from 'react';
import Button from './Button/Button';


function App() {

  const {onToogleButton} = useTelegram()

const {tg} = useTelegram()
React.useEffect(() => {
  tg.ready()
}, [])


  return (
    <div className="App">
     <Header/>
     <Button onClick={onToogleButton}>toogle</Button>
     <Routes>
        <Route index element = {<ProductList/>}/>
        <Route path='/form' element = {<FormProductList/>}/>
     </Routes>
    </div>
  );
}

export default App;
