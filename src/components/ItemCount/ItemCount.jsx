import './ItemCount.css';
import { useState } from 'react';
import { Button, ButtonGroup, Card } from 'react-bootstrap';

export const ItemCount = ({ initial = 1, stock, onAdd}) => {
    const [count, setCount] = useState(initial);

    const handlePlus = () => {
        if (count < (stock)) {
            setCount(count + 1);
        }
    }

    const handleMinus = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const handleOnAdd = () => {
        if (count <= (stock) && count >= 1) {
            onAdd(count);
        }
    }

    return (
        <Card>
            <Card.Body className='d-grid gap-2'>
                <ButtonGroup>
                    <Button onClick={handlePlus} variant='primary'>+</Button>
                    <Button variant='light' disabled>{count}</Button>
                    <Button onClick={handleMinus} variant='primary'>-</Button>
                </ButtonGroup>
            </Card.Body>
            <Card.Footer className='d-grid gap-2'>
                <Button size='md' onClick={handleOnAdd}>Agregar al carrito</Button>
            </Card.Footer>
        </Card>
    );
}