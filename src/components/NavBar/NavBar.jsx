import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { Link, NavLink } from "react-router-dom"


const NavBar = () => {
    return (
        <header className='navbar navbar-expand-lg bg-body-tertiary'>
            <div className="container-fluid">
                <Link to={"/"}>
                    <div className="navbar-brand">
                        PuntoES Uniformes
                    </div>
                </Link>
                <nav className="categories">
                    <ul className='categoriesList'>
                        <NavLink className="navLink" to={"/category/3"}> Uniformes </NavLink>
                        <NavLink className="navLink" to={"/category/1"}> Verano </NavLink>
                        <NavLink className="navLink" to={"/category/2"}> Invierno </NavLink>
                    </ul>
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}

export default NavBar