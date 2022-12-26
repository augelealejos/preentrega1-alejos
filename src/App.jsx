import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'

import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='¡Hola mundo!' />
    </div>
  )
}

export default App
