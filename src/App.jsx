import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from "./components/Cart/Cart"


function App() {


  return (
    <>
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
    </>
  )
}

export default App