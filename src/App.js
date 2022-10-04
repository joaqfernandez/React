import { CartProvider } from './context/CartContext';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Cart from './components/Cart';
import ItemlDetailContainer from './components/ItemlDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemlDetailContainer';
import 'bootstrap/dist/css/bootstrap.css'
import Checkout from './components/Checkout';


function App() {

  return (
    <>
    <CartProvider> 
        <BrowserRouter>
          <NavBar />
            <Routes>
            <Route path='/' element={ <ItemListContainer />}/>
            <Route path='/categoria/:categoriaId' element={ <ItemListContainer />}/>
            <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            </Routes> 
          </BrowserRouter>
    </CartProvider>
        
    </>
  );
}

export default App;
