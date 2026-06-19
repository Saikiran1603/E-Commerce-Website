import React, { useContext, useEffect, useState } from 'react'
import { cart } from '../Router/MainLayout'

export default function Cart() {
  const {items}=useContext(cart);
  const [cartItems,setCartItems]=useState([])

  useEffect(()=>{
    if(items){
      const initializedItems=items.map(item=>({
             ...item,
             quantity:item.quantity|| 1
      }));
     
      setCartItems(initializedItems);
    }

  },[items?.length]);

  const increse=(id)=>{
    const updateItems=cartItems.map(item=>{
      if(item.id === id){
        return {...item,quantity:(item.quantity || 1) +1};
      }
      return item;
     })
     setCartItems(updateItems)
    
  };


  const decrement=(id)=>{
    const updateItems=cartItems.map(item=>{
      if(item.id=== id){
        return {...item,quantity:(item.quantity || 1)-1};
      }
      return item;
    }).filter(item=>item.quantity>0);
    setCartItems(updateItems);
  };
  
  return (
    <div className='d-flex justify-content-center align-items-center flex-column' >

      {
        cartItems.map((product)=>(
          <div key={product.id} className='d-flex justify-content-around align-items-center border m-2 p-2 w-75 ' style={{height:"100px"}}>
            <div className='border p-2 w-25 h-75 d-flex justify-content-center bg-light'>
            <img src={product.image} alt="image" className='w-25'/>
            </div>
            <div>
             <button onClick={
               ()=> increse(product.id)
              
             } className='btn btn-info '>+</button>
             <span> {product.quantity} </span>
             <button onClick={()=>decrement(product.id)} className='btn btn-info' > - </button>
            </div>

            <div>
             Price: {Math.round(product.price * product.quantity * 100) / 100}
            </div>

          </div>
        ))
      }
      {cartItems.length===0 && <h2 className='text-danger mt-5 pt-5'>No items in cart</h2>}
    </div>
  );
}
