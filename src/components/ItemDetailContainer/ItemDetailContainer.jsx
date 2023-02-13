import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from 'react';
import { Alert, Button, Container, Spinner } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { gFetch } from '../../firebase/config';

function ItemDetailContainer() {
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        gFetch({ itemId: itemId })
            .then(response => {
                response.data() ? setItem({ id: response.id, ...response.data() }) : setItem(null);
            })
            .catch(() => setItem(null))
            .finally(() => setLoading(false))
    }, [itemId]);

    return (
        <>{
            loading ?
                <Container className='text-center'><Spinner animation='grow' variant='primary' /></Container> :
                <Container>
                    {item
                        ?
                        <ItemDetail key={item.id} item={item} />
                        :
                        <>
                            <Alert variant='warning'>¡Oops! No existe este producto</Alert>
                            <Link className='d-grid gap-2' to={'/'}><Button size='md' variant='primary'>Volver a inicio</Button></Link>
                        </>
                    }
                </Container>
        }</>
    );
}

export default ItemDetailContainer;