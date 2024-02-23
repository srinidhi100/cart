import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './card';
import Cart from './Cart';
import React, { useEffect, useState } from "react";

function App() {
  let products = [
    {
      id:1,
      name:'iwatch',
      price:25000,
      quantity: 0
    },
    {
      id:2,
      name:'ipad',
      price:55000,
      quantity: 0
    },
    {
      id:3,
      name:'ipod',
      price:15000,
      quantity: 0
    },
    {
      id:4,
      name:'Mac Book pro',
      price:95000,
      quantity: 0
    },
    {
      id:5,
      name:'i phone',
      price:75000,
      quantity: 0
    },
  ]

  const [cartItems,setCartItems] = useState([])
  

  let addCart = (product)=>{
    console.log(++product.quantity)
    setCartItems([...cartItems,product])
  }

  let removeFromCart = (product)=>{
     let indexVal = cartItems.findIndex(obj => product.id === obj.id);
     cartItems.splice(indexVal,1);
     setCartItems([...cartItems]);
  }
  //quantity

  let incNum =(product)=>{
      let indexValue = cartItems.findIndex(obj => product.id === obj.id);
      cartItems[indexValue].quantity = cartItems[indexValue].quantity+1;
      setCartItems([...cartItems]);
  };

  let decNum =(product)=>{
      let indexValue = cartItems.findIndex(obj => product.id === obj.id);
      cartItems[indexValue].quantity = cartItems[indexValue].quantity-1;
      if(cartItems[indexValue].quantity==0)cartItems.splice(indexValue,1);
      setCartItems([...cartItems]);

    
  };
  //end qty
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-8'>
          <div className='row'>
          {
          products.map((product)=>{
            return <Card product ={product} addCart={addCart} cartItems={cartItems}/>
          })}
          </div>
        </div>
        <div className='col-lg-4'>
        <Cart cartItems={cartItems} removeFromCart = {removeFromCart} incNum = {incNum} decNum={decNum}/>
        </div>
      </div>

    </div>
  );
}

export default App;
