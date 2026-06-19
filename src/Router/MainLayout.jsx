import React, { createContext,useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Cart from '../Pages/Cart'
import Products from '../Pages/Products'
import ProductDetails from '../Pages/ProductDetails'
// import Navbar from '../Components/Navbar'

import Company from '../Components/Company'
import Profile from '../Components/Profile'
 
export const cart = createContext();
export default function MainLayout() {
  const [items,setItems]=useState([]);
  const [searchText,setSearchText]=useState();
 const[theme,setTheme]=useState(true);
const search=(e)=>{
  setSearchText( e.target.value)
}






  
  return (
    <div>
       
         <cart.Provider value={{items,setItems,searchText}}>
          <div className='navbar h-25 w-100 d-flex justify-content-around align-items-center' style={{backgroundColor:theme?"#333":"#eee"}}>
          
                  <nav>
                      <h2 className='text-success' ><span className='text-warning'>SK</span><span className='text-white'><span style={{color:theme?"#eee":"#333"}}>-</span></span>Mart</h2>
                  </nav>
                <nav className=' d-flex align-items-center ' >
                  <Link to={"/"} className='p-3 link' style={{color:theme?"#eee":"#333"}}>Home</Link>
                  <Link to={"/products"} className='link p-3' style={{color:theme?"#eee":"#333"}}>Products</Link>
                  <Link to={"/about"} className='link p-3' style={{color:theme?"#eee":"#333"}}>About</Link>
                  <Link to={"/contact"} className='link p-3' style={{color:theme?"#eee":"#333"}}>Contact</Link>
                  
                </nav>
               
                  <div className='inp input-group rounded-pill overflow-hidden h-25  ' style={{width:"200px"}}> 
                      <input 
                      type="text" 
                      name="" id="" 
                      className='form-control '
                      placeholder='Search here...'
                      onChange={search}
                      />
                      
          
                  </div>
          
               <Link to={"/cart"} className='text-decoration-none' >
               <i className='bi-cart text-warning fs-1' >
                <span className='bg-danger rounded-circle fs-0 text-light p-1 ' style={{fontSize:"10px",padding:"2px",position:"relative",bottom:"20px",left:"-20px"}}>
                  {items.length}
                  </span></i></Link>
          
               <button onClick={()=>setTheme(!theme)} className='bg-primary text-light border-0 ps-2 pe-2 rounded-pill'>{theme?"Light":"Dark"}</button>
              </div>

      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}>
          <Route path='company' element={<Company/>}/>
          <Route path='' element={<Profile/>}/>
        </Route>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/products' element={<Products/>}/>
        
        <Route path='/productDetails/:id' element={<ProductDetails/>}/>
       
      </Routes>
 </cart.Provider>
    
     
    </div>
  )
}
