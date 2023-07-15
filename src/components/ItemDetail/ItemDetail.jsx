import './ItemDetail.css'
import { Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { useState, useContext } from 'react'
import { sentenceToPascalCase } from '../../hooks/hooks'


const ItemDetail = ({ id, name, price, img }) => {

  const {agregarProducto}  = useContext(CarritoContext);
  const [quantity, setQuantity]  = useState(1);


const lessProduct = () => {
  if(quantity > 1) {
    setQuantity(quantity - 1)
 }
}
const moreProduct = () => {
  if(quantity < 100) {// = stock
    setQuantity(quantity + 1)  
 }
}

  name ? name = sentenceToPascalCase(name) : name;

  return (

    <div className='productDetail container d-flex'>
      <div className="IMG">
        <img className='imgProducto' src={img} alt={name} />
      </div>
      <div className='detailSection'>
        <h2>{name}</h2>
        <h3>${price}</h3>
        <p>ID: {id}</p>
        <div className='counterContainer'>
          <span>  
            <Button onClick={() => lessProduct()}>-</Button>
            {quantity}
            <Button onClick={() => moreProduct()}>+</Button>
          </span>
        </div>
        <div className="buttonContainer">


       
        <Button onClick={() => agregarProducto({ id, name, price, img}, quantity)} className='buttonDetail'>Agregar Al Carrito</Button>
          <Button className='buttonDetail'><Link to="/checkout"> Comprar </Link></Button>
        </div>
      </div>
    </div>

  )
}

export default ItemDetail 
