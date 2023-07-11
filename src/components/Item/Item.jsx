import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card'
import { Col } from "react-bootstrap"

const Item = ({ id, name, price, img }) => {
  return (
    <>
      <Col key={id} className="d-flex justify-content-center">
        <Card className="h-100" style={{ maxWidth: "400px"}}>
          <Card.Img 
          className="cardImg" 
          variant="top" 
          src={img}
          style={{objectFit:"cover", height: "100%", width: "100%"}}
          />
          <Card.Body className="mt-auto">
            <Card.Title className="cardTitle">{name}</Card.Title>
            <Card.Text>
              {id} - Price: {price}
            </Card.Text>
            <Link className="cardLink" to={`/item/${id}`}>Ver Detalles</Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}
export default Item
