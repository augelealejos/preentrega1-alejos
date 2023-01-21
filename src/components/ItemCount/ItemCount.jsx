import { useState } from 'react'
import { Button, ButtonGroup, Card } from 'react-bootstrap';
import './ItemCount.css'

export const ItemCount = ({ initial = 1, stock, onAdd}) => {
    const [count, setCount] = useState(initial);

    const handleSumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const handleRestar = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    const handleOnAdd = () => {
        onAdd(count)
    }

    return (
        <Card>
            <Card.Body className='d-grid gap-2'>
                <ButtonGroup>
                    <Button onClick={handleSumar} variant='primary'>+</Button>
                    <Button variant='light' disabled>{count}</Button>
                    <Button onClick={handleRestar} variant='primary'>-</Button>
                </ButtonGroup>
            </Card.Body>
            <Card.Footer className='d-grid gap-2'>
                <Button size='lg' onClick={handleOnAdd}>Agregar al carrito</Button>
            </Card.Footer>
        </Card>
    )
}