import React from 'react';
import './Bottle.css';
const Bottle = ({bottle}) => {

    const {img, name, price} = bottle

    return (
        <div className='card bottle'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    );
};

export default Bottle;