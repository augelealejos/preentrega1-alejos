import { Card, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Item.css'

function Item({ producto }) {
    return (
        <Card className='ItemCard'>
            <Card.Img variant='top' src={`${producto.photo}`} />
            <Card.Body>
                <Card.Title>{producto.name}</Card.Title>
            </Card.Body>
            <ListGroup className='list-group-flush'>
                <ListGroup.Item>Stock: {producto.stock}</ListGroup.Item>
            </ListGroup>
            <Card.Footer>
                <Link to={`/item/${producto.id}`}>Ver detalle</Link>
            </Card.Footer>
        </Card>
    )
}

export default Item