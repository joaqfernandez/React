import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemlDetailContainer from './components/ItemlDetailContainer';
import ItemDetailContainer from './components/ItemlDetailContainer';

function App() {

  return (
    <>
      <BrowserRouter>
      {/* AQUI VAN LOS COMPONENTES QUE ESTAN PRESENTES EN TODAS LAS RUTAS */}
      {/* <NavBar />
      
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:id' element={<ItemListContainer/>} />
          <Route path='/item/:id' element={<ItemlDetailContainer/>} />
        </Routes> */}
      <ItemDetailContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
