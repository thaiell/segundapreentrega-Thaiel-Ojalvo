import "./Item.css"
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card'


const Item = ({ id, name, price, img }) => {
  return (

      <div className="gridContainer">
        
      <Card className="card">
        <Card.Img className="cardImg" variant="top" src={img} />
        <Card.Body>
          <Card.Title className="cardTitle">{name}</Card.Title>
          <Card.Text>
            {id} - Price: {price}
          </Card.Text>
          <Link className="cardLink" to={`/item/${id}`}>Ver Detalles</Link>
        </Card.Body>
      </Card>
    </div>

  )
}
export default Item
