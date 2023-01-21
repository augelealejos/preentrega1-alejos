import './CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Badge from 'react-bootstrap/Badge';

const CartWidget = () => {
    return (
        <span><FontAwesomeIcon icon={faShoppingCart} /><Badge bg='secondary'>1</Badge></span>
    )
}

export default CartWidget