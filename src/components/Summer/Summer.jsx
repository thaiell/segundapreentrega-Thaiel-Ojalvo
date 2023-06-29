import { useParams } from "react-router-dom"
import Item from "../Item/Item";

const Summer = () => {

const {id} = useParams();



return (
    <div>
        
       <h1>Seccion Verano</h1>
        <h2></h2>
<Item/>
    </div>
  )
}

export default Summer