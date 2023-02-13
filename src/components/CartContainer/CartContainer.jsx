import { useCartContext } from '../../context/CartContext';
import { useState } from 'react';
import { addDoc, collection, doc, getFirestore, writeBatch } from 'firebase/firestore'
import { Alert, Button, Col, Form, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CartContainer = () => {
    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: ''
    });
    const { cartList, clear, sumPrice, removeItem } = useCartContext();

    const generate = (evt) => {
        evt.preventDefault();

        const order = {};
        order.buyer = dataForm;
        order.items = cartList.map(({ id, title, price }) => ({ title, price, id }));
        order.total = sumPrice();
        order.date = new Date();

        const db = getFirestore();
        const queyCollection =  collection(db, 'orders');
        addDoc(queyCollection, order).then(response => console.log(response)).catch(error => console.log(error));
        
        const batch = writeBatch(db);

        for (let index = 0; index < cartList.length; index++) {
            const element = cartList[index];
            batch.update(doc(db, 'items', element.id), {stock: element.stock - element.quantity});
        }
       
        batch.commit();
        clear();
    }

    const hanleOnChange = (evt) => {
        setDataForm({
            ...dataForm,
            [evt.target.name]: evt.target.value
        });
    }

    return (
        <>
            { 
                cartList.length > 0 
                ?
                    <Row>
                        <Col>
                            <ListGroup>
                                <ListGroup.Item variant='primary'>
                                    <Row>
                                        <Col>Cantidad</Col>
                                        <Col>Producto</Col>
                                        <Col>Total</Col>
                                        <Col><Button onClick={clear} size='md' variant='danger'>Vaciar</Button></Col>
                                    </Row>
                                </ListGroup.Item>
                                {cartList.map(item => (
                                    <ListGroup.Item key={item.id}>
                                        <Row>
                                            <Col>{item.quantity}</Col>
                                            <Col>{item.title}</Col>
                                            <Col>{item.quantity * item.price}</Col>
                                            <Col><Button variant='danger' onClick={() => removeItem(item.id)}> Quitar </Button></Col>
                                        </Row>
                                    </ListGroup.Item>
                                ))}
                                <ListGroup.Item className='d-grid gap-2' variant='light'>
                                    { sumPrice() !== 0 &&  <strong>Precio total: {sumPrice()}</strong>  } 
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col>
                            <ListGroup>
                                <ListGroup.Item variant='primary'>
                                    Orden
                                </ListGroup.Item>
                                <ListGroup.Item>
                                <Form className='d-grid gap-2' onSubmit={generate}>
                                        <Form.Group className='mb-3' controlId='formName'>
                                            <Form.Label>Nombre</Form.Label>
                                            <Form.Control name='name' type='text' value = {dataForm.name} onChange={hanleOnChange}   placeholder='Ingrese nombre' required />
                                        </Form.Group>
                                        <Form.Group className='mb-3' controlId='formPhone'>
                                            <Form.Label>Teléfono</Form.Label>
                                            <Form.Control name='phone' type='text' value = {dataForm.phone} onChange={hanleOnChange}   placeholder='Ingrese teléfono' required />
                                        </Form.Group>
                                        <Form.Group className='mb-3' controlId='formEmail'>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control name='email' type='email' value = {dataForm.email} onChange={hanleOnChange}    placeholder='Ingrese email' required />
                                        </Form.Group>
                                        <Button size='md' variant='primary' type='submit'>
                                            Generar orden
                                        </Button>
                                    </Form>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                :
                    <>
                        <Alert variant='warning'>¡Oops! Carrito vacío</Alert>
                        <Link className='d-grid gap-2' to={'/'}><Button size='md' variant='primary'>Volver a inicio</Button></Link>
                    </>
            }
        </>
    );
}

export default CartContainer;
