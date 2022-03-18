import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar';
import * as bootstrap from 'bootstrap';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer gretting="Bienvenido a BL Swagger"/>
    </div>
  );
}

export default App;
