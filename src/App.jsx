
import BarraNav  from './Componets/BarraNav';
import './App.css'
import Home from './Componets/pages/Home';
import Cart from './Componets/pages/Cart';

import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'

function App() {
  

  return (
    <Router >
      <BarraNav/>
      <Routes>
      <Route path ="/" element={<Home />} />
      <Route path ="/cart" element={<Cart/> }/>
      </Routes>
    </Router>
  )
}

export default App
