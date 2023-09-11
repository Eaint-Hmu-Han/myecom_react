import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Cart} from "./pages/cart/Cart";
import Products from "./pages/product/Products";
import Navbar from "./components/Navbar";
import { CartContextProvider } from "./context/CartContext";
import Favorite from "./pages/favorite/Favorite";

function App() { 
  return (
    <CartContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Products/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/favorite" element={<Favorite/>}></Route>
        </Routes>       
      </Router>
    </CartContextProvider>
  )
}

export default App
