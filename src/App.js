
import './App.css';
import Header from './Header/Header';
import { Route, Routes } from 'react-router-dom';
import ProductList from './Product/ProductList';
import FormProductList from './Forma/FormProduct';



function App() {




  return (
    <div className="App">
     <Header/>
     <Routes>
        <Route path='/' element = {<ProductList/>}/>
        <Route path='/form' element = {<FormProductList/>}/>
     </Routes>
    </div>
  );
}

export default App;
