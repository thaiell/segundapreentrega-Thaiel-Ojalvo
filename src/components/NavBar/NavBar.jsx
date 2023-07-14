import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { Link, NavLink } from "react-router-dom"
import { Container, Navbar, Nav } from "react-bootstrap"



const NavBar = () => {
    return (
        <Navbar expand="md">
            <Container className="initial">
                <Navbar.Brand>
                    <Link to={"/"}>
                        <img src="../public/img/puntoES-IMG.png"
                            alt="PuntoES Logo"
                            style={{ width: "4rem" }}
                        />
                        <span style={{ marginLeft: "15px" }}>
                            PuntoES
                        </span>
                    </Link>
                    </Navbar.Brand>
                    
                    <Nav style={{margin: "auto", padding: "0, 50px"}}>
 
<NavLink className="navLink py-4 px-4" to={"/category/uniforms"}> Uniformes </NavLink>

<NavLink className="navLink py-4 px-4" to={"/category/summer"}> Verano </NavLink>

<NavLink className="navLink py-4 px-4" to={"/category/winter"}> Invierno </NavLink>
              
                    </Nav>
               
<CartWidget />

            </Container>
        </Navbar>
    )
}

export default NavBar