import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'¡Que bueno verte de nuevo!'} />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'¡Que bueno verte de nuevo!'}/>} />
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<CartContainer />}/>

          <Route path='*' element={<Navigate to='/'></Navigate>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
