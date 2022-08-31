import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Producto from './components/Producto';
import Boton from './components/Boton';
import ItemListContainer from './components/ItemListContainer';





function App() {
  // let producto1 = {id: 100, name: 'zapato adidas', price: 100}
  // let producto2 = {id: 101, name: 'zapato nike', price: 100}
  // let producto3 = {id: 102, name: "'vestido lola", price: 100}

  // const saludo = 'holaaaaa'


  return (
    <div >


      {/* <NavBar/> */}

      <ItemListContainer />

      {/* <Boton />  */}
      
      {/* <Producto item={producto1}/>
      <Producto item={producto2}/>
      <Producto item={producto3}/> */}

    </div>
    
  );
}

export default App;
