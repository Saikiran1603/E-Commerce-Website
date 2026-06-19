import React, {  useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { cart } from '../Router/MainLayout';

export default function ProductDetails() {
    const [product,setProduct]=useState({})
   
   const {items,setItems}=useContext(cart);
    const {id}=useParams();
   
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>res.json())
        .then((data)=>{
            setProduct(data)
        })
    },[id])

    

    const handleCart=()=>{
     
        if(items.some((item)=>item.id===product.id)){
            alert("already your added this item")
            return
        }
            setItems((additem)=>
                [...additem,product]
                // setCount(add.length)
            )


            alert("added item into cart")
          
          
      
        
    }

    items.filter((pro)=>{
        console.log(pro.id);
        console.log(pro.title);
        
        
    })
      console.log("count: ",items.length);
  return (
    <div className='' >
      <div className='card ' >
       <div className='card-header'>
       
        <p className='fs-5'><strong>Title:</strong> {product.title} </p>
       </div>

       <div className='card-body d-flex justify-content-center'>
          <img src={product.image} alt="img" className=' ' style={{height:"150px",width:"150px"}}/>
       </div>

       <div className='card-footer'>
           <p><strong>Description : </strong>{product.description?.slice(0,49)}...</p>
           <h2>Price : ${product.price}</h2>
           <h3>Rating: {product.rating?.rate}<i className="bi bi-star-fill text-success"></i> { product.rating?.count} views</h3>
           <button onClick={handleCart}  className='btn btn-warning'>Add to cart</button>
       </div>
      </div>
    </div>
  )
}
