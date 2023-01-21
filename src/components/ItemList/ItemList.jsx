import { Container } from 'react-bootstrap'
import Item from '../Item/Item'
import './ItemList.css'

function ItemList({ productos }) {
    return (
        <>{
            productos.map((producto) =>
                <Item key={producto.id} producto={producto}/>
            )
        }</>
    )
}

export default ItemList