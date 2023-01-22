import React from 'react';
import './Cart.css';

const Cart = ({cart, handleRemoveItem}) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please select minimum an item!!!</p>
    } 
    else if(cart.length === 1){
            message = <div>
            <h3>Amr jonno ekta nao</h3>
            <p>Tomar nijer jonno ekta naw</p>
            <p><small>Amr jonno ekta naw please!</small></p>
        </div>
    }
    return (
        <div>
            <h3 className={cart.length ===2 ? 'orange' : 'purple'}>Order Summary </h3>
            <h5 className={`bold ${cart.length ===2 ? 'blue': 'yellow'}`}>Order Quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p
                key={tshirt._id}>

                {tshirt.name}

                <button onClick={()=>handleRemoveItem(tshirt)} >X</button>
                </p> )
            }{
                message
            }
            {
                cart.length ===3 ?<p>tin jon k gift diba?</p> : <p> Kino kino kino</p>
            }
            <p>and operator</p>
            {
                cart.length===2 && <h4>Double Item</h4>
            }
            <p>Or operator</p>
            {
                cart.length ===4 || <h4>Charta Item naw</h4>
            }
        </div>
    );
};

export default Cart;