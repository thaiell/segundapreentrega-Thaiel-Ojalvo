import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from "./components/Cart/Cart"
import { CarritoContext } from "./context/CarritoContext"

function App() {


  return (
    <>
<CarritoContext>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:idCategory" element={ <ItemListContainer/> }/>
          <Route path="/item/:idItem" element={ <ItemDetailContainer/> }/>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path="/checkout" element={<h2>muy pronto</h2>}></Route>
       </Routes> 
      </BrowserRouter>
     </CarritoContext>
    </>
  )
}

export default App