import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"


import Item from "./components/Item/Item"
function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="category/:idCategory" element={ <ItemListContainer/> }/>
          <Route path="/item/:idItem" element={ <ItemDetailContainer/> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

 {/* <Route path="/uniforms/:id" element={<Uniforms/>}/>
          <Route path="/summer/:id" element={<Summer/>}/>
          <Route path="/winter/:id" element={<Winter/>}/> */}
          {/* <Route path="*" element={<Error/>}/> */}