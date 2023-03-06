import { createContext, useContext, useState } from 'react';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (item) => {
        const isIn = isInCart(item.id)
        if (isIn !== -1) {
            cartList[isIn].quantity = cartList[isIn].quantity + item.quantity;
            setCartList([...cartList]);
        } else {
            setCartList([...cartList, item]);
        }
    }

    const removeItem = (itemId) => {
        setCartList(cartList.filter(item => item.id !== itemId));
    }

    const clear = () => {
        setCartList([]);
    }

    const isInCart = (itemId) => {
        return cartList.findIndex(item => item.id === itemId);
    }

    const sumItems = () => {
        return cartList.reduce((count, item) => count += item.quantity, 0);
    }

    const sumPrice = () => {
        return cartList.reduce((count, item) => count += (item.quantity * item.price), 0);
    }

    return (
        <CartContext.Provider value={{ cartList, addItem, removeItem, clear, isInCart, sumItems, sumPrice }}>
            {children}
        </CartContext.Provider>
    );
}
