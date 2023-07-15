import { useState, useContext } from "react"
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "../../services/config"
import { CarritoContext } from "../../context/CarritoContext"
import "./Checkout.css"

const Checkout = () => {

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmed, setEmailConfirmed] = useState("");
  const [error, setError] = useState("");
  const [orderID, setOrderID] = useState("");
  const { carrito, vaciarCarrito, cantidadTotal } = useContext(CarritoContext);

  const handlerForm = (e) => {
    e.preventDefault();

    if (!name || !lastName || !phone || !email || !emailConfirmed) {
      setError("Complete todos los campos por favor")
      console.log(error)
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
          quantity: product.quantity
      })),
      total: cantidadTotal,
      userName: name,
      userLastName: lastName,
      userPhone: phone,
      userEmail: email,
      date: new Date(),
    };
    console.log(carrito)
    console.log(order);
    Promise.all(
      order.items.map(async (productOrder) => {
        console.log(productOrder);
        const productRef = doc(db, "products", productOrder.id);
        const productDoc = await (getDoc(productRef))
        const stockNow = productDoc.data().stock;

        await updateDoc(productRef, {
          stock: stockNow - productOrder.quantity
        })
      })
    )
  .then(() => {
        console.log(order);
        addDoc(collection(db, "orders"), order)
          
          .then((docRef) => {
            setOrderID(docRef.id);
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
      <form onSubmit={handlerForm}>
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
          <strong>Gracias por comprar, tu orden de compra es {orderID}</strong>
        )
      }

    </>
  )
}

export default Checkout