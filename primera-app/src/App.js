import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer gretting="Bienvenido a BL Swagger"/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenido a BL Swagger'}/>} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          </Routes>
      </BrowserRouter>

     

    </div>
  );
}

export default App;
