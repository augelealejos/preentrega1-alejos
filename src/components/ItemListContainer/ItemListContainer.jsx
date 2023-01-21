import { useEffect, useState } from 'react';
import { Alert, CardGroup, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { gFetch } from '../../utils/gFetch';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'

function ItemListContainer({greeting}) {
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const {categoryId} = useParams()
    
    useEffect(() => {
        gFetch()
            .then(response => {
                setProductos(categoryId ? response.filter(items => items.categoryId == categoryId) : response)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [categoryId]);

    console.log(productos);

    return (
        <>{
            loading ? 
            <Container className='text-center'><Spinner animation='grow' variant='primary' /></Container> :
            <Container>
                <Row>
                    <Col><Alert variant='primary'>{greeting}</Alert>
                    </Col>
                </Row>
                <Row>
                    <Col className='ItemListcontainer'>
                        <CardGroup><ItemList productos={productos}/></CardGroup>
                    </Col>
                </Row>
            </Container>
        }</>
    )
}

export default ItemListContainer