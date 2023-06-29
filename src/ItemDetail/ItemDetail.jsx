import './ItemDetail.css'

const ItemDetail = ({ id, name, price, img}) => {
  return (
    <div>
        <div className='cardProducto'>
            <img className='imgProducto' src={img} alt={name} />
            <h3>Nombre: {name} </h3>
            <p>Precio: {price} </p>
            <p>ID: {id} </p>
    </div>
    </div>
  )
}

export default ItemDetail 