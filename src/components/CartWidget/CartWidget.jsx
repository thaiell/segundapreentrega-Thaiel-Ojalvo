import { useContext } from "react"
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'
import './CartWidget.css'

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext)
  return (
    <div className="cartDiv">
      <span className="cart-icon">
       
       <Link to="/cart">
          {cantidadTotal > 0 && <span className="cart-badge">{ cantidadTotal }</span>}
        
          <i className="cartWidgetIcon fa-solid fa-cart-shopping"></i>
        </Link>
      </span>
    </div >
  )
}

export default CartWidget