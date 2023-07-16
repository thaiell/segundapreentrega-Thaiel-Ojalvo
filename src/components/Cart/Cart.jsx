import { useContext } from 'react'
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import CartItem from '../CartItem/CartItem'
import { Button } from 'react-bootstrap'
import "./Cart.css"
import { Navbar, Container } from "react-bootstrap";


const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext)

    if (cantidadTotal === 0) {
        return (
            <div className='emptyCartContainer'>
                <h3>Aqui apareceria tu carrito...</h3>
                <p>Visite nuestro todo nuestro catalogo de productos aqui:</p>
                <Button><Link to="/">Ver Productos</Link></Button>
            </div>
        )
    }
    return (
        <>
            <Container className='itemsCartContainer' style={{marginTop:"4.5rem"}}>
                {carrito.map(product => <CartItem key={product.id} {...product} />)}
            </Container>
            <Navbar className='cartFooter' bg="light" variant='light' fixed='bottom' style={{height:"120px"}}>
                <Container className='cartFooterContainer'>
                    <h3>Total: ${total} </h3>
                    <h3>Cantidad Total: {cantidadTotal}</h3>
                    <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
                    <Link to="/checkout"> Finalizar Compra </Link>
                </Container>
            </Navbar>


        </>
    )
}

export default Cart