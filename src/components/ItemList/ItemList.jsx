import Item from "../Item/Item"
import { Row } from 'react-bootstrap'

const ItemList = ({ products }) => {
  return (
    <div className="container">
      
    <Row xs={1} md={2} lg={3}  className="g-4 mx-7">
        {products.map(prod => <Item key={prod.id} {...prod}/>)}
    </Row>
    </div>
  )
}

export default ItemList