const getCartfromLocalStorage = () => {
    const storedCartString = localStorage.getItem('cart')
    if(storedCartString){
        const storedCart = JSON.parse(storedCartString)
        return storedCart;
    }
    else{
        return [];
    }
}


const saveCartToLocatStorage = cart => {
    const cartStringify = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringify)
}

const addItemToCartLocalStorage = id => {
    const cart = getCartfromLocalStorage();
    const newCart = [...cart, id];
    

    saveCartToLocatStorage(newCart)
}



const removeFromLocalStorage = id => {
    const storedCart = getCartfromLocalStorage()
    const remainingCart = storedCart.filter(storedId => storedId !== id)
    saveCartToLocatStorage(remainingCart)
}



export {
    getCartfromLocalStorage as getStoredCart,
    addItemToCartLocalStorage as addToStoredCart,
    removeFromLocalStorage as removeFromCart
    }


