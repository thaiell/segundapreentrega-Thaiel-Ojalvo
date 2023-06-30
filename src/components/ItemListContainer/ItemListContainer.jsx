import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { getProducts, getProductsByCategory } from "../../asyncmock"
import { useParams } from "react-router-dom"


const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { idCategory } = useParams()
    useEffect(() => {
        const productsFunction = idCategory ? getProductsByCategory : getProducts

        productsFunction(idCategory)
            .then(res => {
                setProducts(res);
                console.log(res);
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