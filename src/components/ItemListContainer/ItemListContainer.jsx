import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { Alert, CardGroup, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { gFetch } from '../../firebase/config';

function ItemListContainer({ greeting }) {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        gFetch({ categoryId: categoryId })
            .then(response => {
                setItems(response);
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [categoryId]);


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
                            <CardGroup><ItemList items={items} /></CardGroup>
                        </Col>
                    </Row>
                </Container>
        }</>
    );
}

export default ItemListContainer;