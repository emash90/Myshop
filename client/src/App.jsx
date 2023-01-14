import Home from "./pages/Home"
import ProductList from "./pages/ProductList"
import Product from "./pages/Product"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import {  BrowserRouter as Router,  Routes,  Route,  Link } from "react-router-dom"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>

  )
}

export default App
