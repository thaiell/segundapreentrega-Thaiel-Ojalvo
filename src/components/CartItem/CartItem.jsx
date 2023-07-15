import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import "./CartItem.css"
import Button from "react-bootstrap/button"
import { Link } from "react-router-dom"



const CartItem = ({ item, quantity }) => {

    const { eliminarProducto } = useContext(CarritoContext);

    return (
        <div className="item">
            <div className="itemDetail">
                <h4>{item.name}</h4>
                <p>Cantidad: {quantity}</p>
                <p>Precio: ${item.price}</p>
            <span className="hola">
            <Button>
                <Link to={`/item/${item.id}`}>Ver Detalles</Link>
            </Button>
            </span>
            </div>
           
            <div className="imgSection">
                <img src={item.img} alt={item.name} />
            </div>
        
        <Button className="eliminateIcon" onClick={() => eliminarProducto(item.id)} ><i className="fa-solid fa-trash"></i></Button>
        </div>
    )
}

export default CartItem