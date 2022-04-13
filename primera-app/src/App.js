import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import {useState,createContext} from 'react';
import { CartContextProvider } from './context/CartContext';

export const CartContext = createContext()

function App() {

  const [cart,setCart] = useState([])

  return (
    <div className="App">
      <CartContext.Provider>
        
      <BrowserRouter>
        <NavBar cart={cart}/>
          <Routes>
            <Route path='/' element={<ItemListContainer gretting="Bienvenido a BL Swagger"/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenido a BL Swagger'}/>} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          </Routes>
      </BrowserRouter>
      </CartContext.Provider>

    </div>
  );
}

export default App;
