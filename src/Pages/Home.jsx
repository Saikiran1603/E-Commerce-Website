import React, { useContext } from 'react'
import useApi from '../Components/useApi'
import { Link } from 'react-router-dom';
import { cart } from '../Router/MainLayout';

export default function Home() {
    const {data:product,error,loading}=useApi("https://fakestoreapi.com/products");
    const{searchText}=useContext(cart)

   const filteredItems=product.filter((item)=>{
      return  item.title.toLowerCase().includes((searchText ||"").toLowerCase());
   })

   console.log(filteredItems);
   
  return (
    <div className='d-flex justify-content-around align-items-center flex-wrap flex-column gap-5 p-5'>

      <h2>Products</h2>
      
<div className='d-flex flex-wrap justify-content-evenly gap-5 '>
      {
        searchText?
       filteredItems.map((item)=>(
            
             
              <div className='cards card d-flex justify-content-end align-items-center flex-wrap bg-light ' key={item.id} style={{width:"300px",height:"300px",cursor:"pointer"}} >
         <Link to={`/productDetails/${item.id}`} className='d-flex justify-content-around align-items-center  flex-wrap gap-5 text-decoration-none text-dark'>
         <img src={item.image} alt="image" className=' mt-5' style={{height:"100px" ,width:"100px"}}/>
         <div className='card-body d-flex justify-content-center align-items-end' >
          <p><strong>Title: </strong>{item.title}</p>
         </div>
         </Link>
      </div>
            
       ))

       :
      
       
        product.map((img)=>(
            <div className='cards card d-flex justify-content-end align-items-center flex-wrap bg-light ' key={img.id} style={{width:"300px",height:"300px",cursor:"pointer"}} >
         <Link to={`/productDetails/${img.id}`} className='d-flex justify-content-around align-items-center  flex-wrap gap-5 text-decoration-none text-dark'>
         <img src={img.image} alt="image" className=' mt-5' style={{height:"100px" ,width:"100px"}}/>
         <div className='card-body d-flex justify-content-center align-items-end' >
          <p><strong>Title: </strong>{img.title}</p>
         </div>
         </Link>
      </div>
        ))

}
      
     </div>
    </div>
  )
}
