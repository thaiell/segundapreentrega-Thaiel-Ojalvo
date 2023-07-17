import { useState, useContext } from "react"
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "../../services/config"
import { CarritoContext } from "../../context/CarritoContext"
import "./Checkout.css"
import CartItem from "../CartItem/CartItem"
import Button from "react-bootstrap/button"
import { Container } from "react-bootstrap"
import { copyToClipboardByParam } from "../../hooks/hooks"
import { Link } from "react-router-dom"

const Checkout = () => {
  const { carrito, vaciarCarrito, cantidadTotal, total } = useContext(CarritoContext);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmed, setEmailConfirmed] = useState("");
  const [error, setError] = useState("");
  const [orderID, setOrderID] = useState("");

  
  const handlerForm = (e) => {
    e.preventDefault();
    if (carrito.length < 1) {
      setError(
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          El carrito esta vacio, intente primero agregar objetos al carrito. {" "}
          <Link style={{ display: "inline-block" }} to="/">Ver Productos</Link>
        </div>
      )
      return;
    }
    if (!name || !lastName || !phone || !email || !emailConfirmed) {
      setError("Complete todos los campos por favor")
      return;
    }

    if (email !== emailConfirmed) {
      setError("Los campos del email no coinciden")
      return;
    }

    const order = {

      items: carrito.map(product => ({
        id: product.item.id,
        productName: product.item.name,
        quantity: product.quantity,
        pricePerProduct: product.item.price
      })),
      total: cantidadTotal,
      totalPrice: carrito.reduce((acc, current) => acc + (current.item.price * current.quantity), 0),
      userName: name,
      userLastName: lastName,
      userPhone: phone,
      userEmail: email,
      date: new Date(),
    };
    Promise.all(
      order.items.map(async (productOrder) => {
        const productRef = doc(db, "products", productOrder.id);
        const productDoc = await (getDoc(productRef))
        const stockNow = productDoc.data().stock;

        await updateDoc(productRef, {
          stock: stockNow - productOrder.quantity
        })
      })
    )
      .then(() => {
        addDoc(collection(db, "orders"), order)
          .then((docRef) => {
            setOrderID(docRef.id);
            setError(null);
            vaciarCarrito();
          })
          .catch((error) => {
            console.log("Error al crear la orden", error);
            setError("Error al crear la orden, vuelva mas tarde");
          })
      })
      .catch((error) => {
        console.log("Error al actualizar el stock", error);
        setError("Error al actualizar el stock, intente nuevamente");
      })

  }


  return (
    <>

      <form onSubmit={handlerForm} style={{marginTop:"3rem"}}>
        <label htmlFor="name">Name</label>

        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />

        <label htmlFor="email">Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="emailConfirmed">Email Confirmed</label>
        <input type="email" value={emailConfirmed} onChange={(e) => setEmailConfirmed(e.target.value)} />

        <label htmlFor="phone">Phone</label>
        <input type="type" value={phone} onChange={(e) => setPhone(e.target.value)} />

        {error && <p style={{ color: "red" }}> {error} </p>}


        <button type="submit">Submit</button>
      </form>
      {
        orderID && (
          <strong>Gracias por comprar, tu orden de compra es {<button style={{ textDecoration: "underline", border: 0, backgroundColor: "inherit" }} onClick={() => copyToClipboardByParam(orderID)}>{orderID}<i style={{ marginLeft: "10px" }} className="fa-regular fa-clipboard"></i></button>}</strong>
        )
      }
<h1>Precio total: ${total}</h1> 
      <Container style={{ marginTop: "4.5rem" }}>
        {carrito.map(product => <CartItem key={product.id} {...product} />)}
      </Container>
    </>
  )
}

export default Checkout