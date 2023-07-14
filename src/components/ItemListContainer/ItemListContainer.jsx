import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, query, where, getDocs } from "firebase/firestore"
import { db } from "../../services/config"

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { idCategory } = useParams();

useEffect(() => {
    const dbProducts = idCategory ? query(collection(db, "products"), where("idCategory", "==", idCategory)) : collection(db, "products")
    getDocs(dbProducts)
        .then( res => {
            const newProducts = res.docs.map( doc => {
                const data = doc.data();
                return {id: doc.id, ...data}
            })
            setProducts(newProducts)
        })
        .catch(error => console.log(error))
}, [idCategory])


    return (
        <>
            <h2 style={{ textAlign: "center" }}>Mis Productos</h2>
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer