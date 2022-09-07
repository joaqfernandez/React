import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemlDetailContainer from './components/ItemlDetailContainer';
import ItemDetailContainer from './components/ItemlDetailContainer';
import Test from './components/Test';
import ItemDetail from './components/ItemDetail';

function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar />
      
        <Routes>
        <Route path="/test" element={<Test />} />

          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:id' element={<ItemListContainer/>} />
          <Route path='/products/1' element={<ItemlDetailContainer/>} />

        </Routes> 

      </BrowserRouter>
    </>
  );
}

export default App;
