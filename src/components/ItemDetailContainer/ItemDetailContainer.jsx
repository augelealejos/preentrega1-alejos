import { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { gFetch } from '../../utils/gFetch';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'

function ItemDetailContainer() {
    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState([])
    const {itemId} = useParams()
    
    useEffect(() => {
        gFetch(itemId)
            .then(response => {
                setProducto(response)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [itemId]);

    console.log(producto);

    return (
        <>{
            loading ? 
            <Container className='text-center'><Spinner animation='grow' variant='primary' /></Container> :
            <Container>
                <ItemDetail key={producto.id} producto={producto} />
            </Container>
        }</>
    )
}

export default ItemDetailContainer