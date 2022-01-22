import { useState, useEffect } from 'react';
import { getStoredCart } from '../fakedb';

const useCart = () => {
    const [cart, setCart] = useState([]);

     useEffect(() => {
        const savedCart = getStoredCart();
        fetch("./products.JSON")
        .then(res => res.json())
        .then(products =>{
        if (products.length) {
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    // set quantity
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }

        })

    }, []);

    return [cart, setCart];

}

export default useCart;