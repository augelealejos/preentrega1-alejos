import './ItemDetail.css';
import { Card, Col, Row, Button, ListGroup } from 'react-bootstrap';
import { ItemCount } from '../ItemCount/ItemCount';
import { useCartContext } from '../../context/CartContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function ItemDetail({ item }) {
    const [isInCount, setIsInCount] = useState(true);
    const { cartList, addItem } = useCartContext();

    const onAdd = (quantity) => {
        addItem({ ...item, quantity: quantity });
        setIsInCount(false);
    }

    const handleInitial = (item) => {
        const quantity = cartList.find(element => element.id === item.id);
        return quantity?.quantity ? quantity.quantity : 1;
    }

    return (
        <Row xs={1} md={2} className='g-2'>
            <Col>
                <Card>
                    <Card.Img variant='top' src={`${item.imageId}`} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                        <ListGroup horizontal>
                            <ListGroup.Item>Stock: {item.stock}</ListGroup.Item>
                            <ListGroup.Item variant='primary'>Precio: {item.price}</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                {
                    isInCount ?
                        <ItemCount onAdd={onAdd} stock={item.stock} initial={handleInitial(item)} />
                        :
                        <Card>
                            <Card.Body>
                                <Link className='d-grid gap-2' to={'/cart'}><Button size='md' variant='primary'>Ir al carrito</Button></Link>
                            </Card.Body>
                            <Card.Footer>
                                <Link className='d-grid gap-2' to={'/'}><Button size='md' variant='success'>Seguir comprando</Button></Link>
                            </Card.Footer>
                        </Card>
                }


            </Col>
        </Row>
    );
}

export default ItemDetail;