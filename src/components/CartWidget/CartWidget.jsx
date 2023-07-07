import { useContext } from "react"
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'
import './CartWidget.css'

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext)
  return (
    <div className="cartDiv">

      <Link to="/cart">
        <i className="fa-solid fa-cart-shopping"></i>
        {
          cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
        }
      </Link>
    </div>
  )
}

export default CartWidget