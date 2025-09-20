import React, { use, useState } from 'react';
import Bottle from '../Bottle';
import './Bottles.css'

const Bottles = ({bottlesPromise}) => {
    const [cart, setCart] = useState([])

    const bottles = use(bottlesPromise);

    const handleAddToCart = (bottle) => {
        // console.log("Bottle Will Be Added To Cart", bottle)

        const newCart = [...cart, bottle];
        setCart(newCart);
    }

    return (
        <div>
            <h3>Bottles: {bottles.length}</h3>
            <p>Added To a Cart: {cart.length}</p>
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