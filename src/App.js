import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Producto from './components/Producto';


function App() {
  let producto1 = {id: 100, name: 'zapato adidas', price: 100}
  let producto2 = {id: 101, name: 'zapato nike', price: 100}
  let producto3 = {id: 102, name: "'vestido lola", price: 100}

  return (
    <div >
      <NavBar color="secondary"/>

      <Producto item={producto1}/>
      <Producto item={producto2}/>
      <Producto item={producto3}/>

    </div>
    
  );
}

export default App;
