import { useState, createContext } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTodal: 0
})

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    const agregarProducto = (item, quantity) => {
        const productoExistente = carrito.find(prod => prod.item.id === item.id);

        if (!productoExistente) {
            setCarrito(prev => [...prev, { item, quantity }]);
            setCantidadTotal(prev => prev + quantity);
            setTotal(prev => prev + (item.price * quantity));
        } else {
            toast.error("El producto seleccionado ya se encuentra en el carrito", {
                autoClose: 2000
            })

            return;
        }
    }

    const eliminarProducto = (id) => {
        const productoEliminado = carrito.find(prod => prod.item.id === id);
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);
        setCarrito(carritoActualizado);
        setCantidadTotal(prev => prev - prev.quantity);
        setTotal(prev => prev - (productoEliminado.item.price * productoEliminado.quantity));
    }

    const vaciarCarrito = () => {
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0);
    }

    return (
        <CarritoContext.Provider value={{ carrito, total, cantidadTotal, agregarProducto, eliminarProducto, vaciarCarrito }}>
            {children}
        </CarritoContext.Provider>
    )
}

