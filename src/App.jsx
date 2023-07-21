import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import ProductDetail from './components/ProductDetail/ProductDetail'
import CartDetail from './components/CartDetail/CartDetail'
import { BrowserRouter } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/product/:productId' element={<ProductDetail />} />
          <Route path='/cart' element={<CartDetail />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
