import { CartProvider } from './context/CartContext';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Cart from './components/Cart';
import ItemlDetailContainer from './components/ItemlDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Test from './tests/poke/Test';


function App() {

  return (
    <>
    <CartProvider> 
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path="/test" element={<Test />} />
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:id' element={<ItemListContainer/>} />
              <Route path='/products/1' element={<ItemlDetailContainer/>} />
              <Route path='/cart' element={<Cart/>}/>
            </Routes> 

          </BrowserRouter>
    </CartProvider>
        
    </>
  );
}

export default App;
