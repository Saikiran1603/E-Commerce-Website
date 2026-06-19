import React from 'react'
import useApi from '../Components/useApi'
import { Link, useSearchParams } from 'react-router-dom';

export default function Products() {
  const[searchParams,setSearchParams]=useSearchParams();
  const {data,error,loading}=useApi("https://fakestoreapi.com/products");

  const currentPage=Number(searchParams.get("page"))||1;
  const recordedPerPage=5;
  const totalPages=Math.ceil(data.length/recordedPerPage);
  const startingIndex=(currentPage-1) * recordedPerPage;
  const endingIndex=startingIndex + recordedPerPage
console.log(totalPages);
  const currentProducts = data.slice(startingIndex,endingIndex);


  const gotoPage=(pageNum)=>{
     
     setSearchParams({page:pageNum})
  }
  const prev=()=>{
    if(currentPage>1){
      // setSearchParams({page:currentPage-1})
      gotoPage(currentPage-1)
    }
  }
 
  const next=()=>{
    if(currentPage<totalPages){
      // setSearchParams({page:currentPage+1})
      gotoPage(currentPage+1)
    }
  }

  return (
    <div>
      <div className='d-flex justify-content-center flex-wrap p-5 gap-3'>
        {
          currentProducts.map((product)=>(
            <div key={product.id} className='products cards card border-warning  p-2 d-flex flex-column justify-content-center' >
            <Link to={`/productDetails/${product.id}`} className='text-decoration-none d-flex align-items-center flex-column'>
              <img src={product.image} alt="" className='productImg' />

              <div className='card-body'>
                <p className=''>{product.title?.slice(1,10)}</p>

                {/* <h3 className='text-dark'>${product.price}</h3> */}
               
              </div>
               </Link>
            </div>
          ))
        }
      </div>
<div className='d-flex justify-content-center p-3 '> <span>{currentPage} / {totalPages}</span></div>
      <div className='d-flex justify-content-center pb-5 gap-3 mb-5'>
        <button onClick={prev} className='btn btn-outline-info btn-primary text-light'>prev</button>
       

        {
          Array.from({length:totalPages},(_,i)=>i+1).map((pageNum)=>(
           
            <button key={pageNum} onClick={()=>gotoPage(pageNum)}  className='btn btn-outline-danger'>{pageNum}</button>
           
          ))
        }
        <button className='btn btn-outline-info btn-primary text-light' onClick={next}>next</button>
      </div>
      
    </div>
  )
}
