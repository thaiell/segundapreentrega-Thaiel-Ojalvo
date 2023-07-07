import { useState, useEffect } from "react"
import { getEspecificProduct } from "../../asyncmock"
import { useParams } from "react-router-dom"
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
const [product, setProduct] = useState(null)
const { idItem } = useParams();

useEffect(() => {
    getEspecificProduct(idItem)
        .then(res => setProduct(res))
        .catch(error => console.log(error))
}, [idItem])
    return (
    <div>
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer