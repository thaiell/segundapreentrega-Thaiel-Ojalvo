import "./Item.css"
/* import { Link } from "react-router-dom" */
import Card from 'react-bootstrap/Card';


const Item = ({ id, name, price, img}) => {

return (
    <div>
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
             {id} - Price: {price}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
)
}

export default Item