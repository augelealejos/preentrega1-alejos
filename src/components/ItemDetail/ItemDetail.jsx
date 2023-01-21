import { Card, Col, Row } from 'react-bootstrap'
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.css'

function ItemDetail({ producto }) {
    const onAdd = (cant) => {
        console.log(cant)
    }

    return (
        <Row xs={1} md={2} className='g-2'>
            <Col>
                <Card>
                    <Card.Img variant='top' src={`${producto.photo}`} />
                    <Card.Body>
                        <Card.Title>{producto.name}</Card.Title>
                        <Card.Text>
                            {producto.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>Stock: {producto.stock}</Card.Footer>
                </Card>
            </Col>
            <Col>
                <ItemCount onAdd={onAdd} stock={producto.stock}/>
            </Col>
        </Row>
    )
}

export default ItemDetail