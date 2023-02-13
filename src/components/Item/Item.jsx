import './Item.css';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Item({ item }) {
    return (
        <Card className='ItemCard'>
            <Card.Img variant='top' src={`${item.imageId}`} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <ListGroup horizontal>
                    <ListGroup.Item>Stock: {item.stock}</ListGroup.Item>
                    <ListGroup.Item variant='primary'>Precio: {item.price}</ListGroup.Item>
                </ListGroup>
            </Card.Body>

            <Card.Footer>
                <Link to={`/item/${item.id}`}>Ver detalle</Link>
            </Card.Footer>
        </Card>
    );
}

export default Item;