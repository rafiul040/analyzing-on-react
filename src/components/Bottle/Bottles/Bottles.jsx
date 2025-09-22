import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle';
import './Bottles.css'
import { addToStoredCart, getStoredCart, removeFromCart } from '../../../utilities/localstorage';
import Cart from '../Cart/Cart';

const Bottles = ({bottlesPromise}) => {
    const [cart, setCart] = useState([])

    const bottles = use(bottlesPromise);


    useEffect(() => {
        const storedCartIds = getStoredCart()
        // console.log(storedCartIds, bottles)

        const storedCart = []

        for(const id of storedCartIds){
            console.log(id)
            const cartBottle = bottles.find(bottle => bottle.id === id);
            if(cartBottle){
                storedCart.push(cartBottle)
            }
        }

        console.log("stored cart", storedCart)
        setCart(storedCart)
    }, [bottles])



    const handleAddToCart = (bottle) => {
       

        const newCart = [...cart, bottle];
        setCart(newCart);




        addToStoredCart(bottle.id)
    }


    const handleRemoveFromCart = id => {

        const remainingCart = cart.filter(bottle => bottle.id !== id)
        setCart(remainingCart)
        removeFromCart(id)
        

    }

    return (
        <div>
            <h3>Bottles: {bottles.length}</h3>
            <p>Added To a Cart: {cart.length}</p>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className='bottle-container'>

            {
                bottles.map(bottle => <Bottle
                    key={bottle.id}
                    handleAddToCart={handleAddToCart}
                    bottle={bottle}></Bottle>)
                }
                </div>
        </div>
    );
};

export default Bottles;