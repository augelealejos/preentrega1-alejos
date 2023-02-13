import './CartWidget.css';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { sumItems } = useCartContext();

    return (
        <span><FontAwesomeIcon icon={faShoppingCart} /><Badge bg='secondary'>{sumItems() > 0 ? sumItems() : ''}</Badge></span>
    );
}

export default CartWidget;