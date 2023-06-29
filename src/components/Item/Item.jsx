import "./Item.css"
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card'


const Item = ({ id, name, price, img}) => {

return (
           <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
             {id} - Price: {price}
          </Card.Text>
          <Link to={`/item/${id}`}></Link>
        </Card.Body>
      </Card> 
)}
export default Item
/*         <div className='cardProducto'>
            <img className='imgProducto' src={img} alt={name} />
            <h3>Nombre: {name} </h3>
            <p>Precio: {price} </p>
            <p>ID: {id} </p>
            <Link to={`/item/${id}`}> Ver Detalles</Link>
    </div> */