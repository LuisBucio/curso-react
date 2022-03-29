import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar';
import * as bootstrap from 'bootstrap';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';
import ItemList from './componentes/ItemList/ItemList'



function App() {

  const onAdd = (quantity) =>{
    console.log(quantity)
  }
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer gretting="Bienvenido a BL Swagger"/>

    </div>
  );
}

export default App;
