import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from './../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css';

const Home = () => {
    const tshirts = useLoaderData();
      const [cart, setCart] = useState([]);
      const handleAddToCart = tshirt => {
      const exists = cart.find(ts=> ts._id === tshirt._id);
     if(exists){
         alert("Areday exists")
     }
      else{
         const newCart = [...cart, tshirt];
         setCart(newCart)
         // alert("Successfully added")
      }
      
    }

    const handleRemoveItem = tshirt =>{
      const remaining = cart.filter(ts => ts._id!== tshirt._id);
      setCart(remaining)
      // alert("Successfully removed")

    }
    return (
        <div className='home-conatainer'>
           <div className='tshirt-container'>       
           {
            tshirts.map(tshirt => <TShirt
            key={tshirt._id}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
            ></TShirt>)
           }
           
              </div>
           <div className='cart-container'>
              
                 <Cart
                 cart={cart} 
                 handleRemoveItem={handleRemoveItem}
                 ></Cart>
              
           </div>

        </div>
    );
};

export default Home;