import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Checkout from "./components/Checkout/Checkout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from "./components/Cart/Cart"
import { CarritoProvider } from "./context/CarritoContext"
import { ToastContainer } from "react-toastify"
function App() {


  return (
    <>
  <CarritoProvider>
    <ToastContainer/>
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:idCategory" element={ <ItemListContainer/> }/>
          <Route path="/item/:idItem" element={ <ItemDetailContainer/> }/>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path="/checkout" element={<Checkout/>}></Route>
       </Routes> 
    </BrowserRouter>
  </CarritoProvider>
    </>
  )
}

export default App