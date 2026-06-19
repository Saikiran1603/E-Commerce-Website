// import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
// import { cart } from '../Router/MainLayout'

export default function Company() {
  // const {items}=useContext(cart);
  return (
    <div className=''>

        {/* <nav>
            <h2 className='text-success'><span className='text-warning'>SK</span><span className='text-white'>-</span>Mart</h2>
        </nav>
      <nav className=' d-flex align-items-center '>
        <Link to={"/"} className='p-3 link'>Home</Link>
        <Link to={"/products"} className='link p-3'>Products</Link>
        <Link to={"/about"} className='link p-3'>About</Link>
        <Link to={"/contact"} className='link p-3'>Contact</Link>
        
      </nav>
     
        <div className='inp input-group rounded-pill overflow-hidden h-25 w-50 '  >
            <input 
            type="text" 
            name="" id="" 
            className='form-control '
            placeholder='Search here...'
            />
            <button className='btn btn-primary'  onClick={handleSearch}><i className='bi-search'></i></button>

        </div>

     <Link to={"/cart"} className='text-decoration-none' >
     <i className='bi-cart text-warning fs-1' >
      <span className='bg-danger rounded-circle fs-0 text-light ' style={{fontSize:"10px",padding:"2px",position:"relative",bottom:"20px",left:"-20px"}}>
        {items.length}
        </span></i></Link> */}

     <h1 className="mt-5 text-info ps-4 pe-2">About Website SK-Mart small Business</h1>
     <div className="d-flex flex-wrap justify-content-center mt-5 gap-4 w-100 ps-4">
      <div>
        <h2 className="text-danger">About us</h2>
        <img className="w-75 mb-5" src="https://www.web4business.com.au/wp-content/uploads/2019/10/About-Websites-4-Small-Business-Bio.jpg" alt="" />
      </div>

      <div>
        <h2 className="text-danger">Testimonials</h2>
        <img className="w-75" src="https://www.web4business.com.au/wp-content/uploads/2019/10/Websites-4-Small-Business-Testimonials.jpg" alt="" />
      </div>

      <div>
        <h2 className="text-danger">In The Media</h2>
        <img className="w-75" src="https://www.web4business.com.au/wp-content/uploads/2019/10/In-the-media.jpg" alt="" />

      </div>

      <div>
        <h2 className="text-danger">Services</h2>
        <img className="w-75 mb-5" src="https://www.web4business.com.au/wp-content/uploads/2019/10/Websites-4-Small-Business-Services.jpg" alt="" />
      </div>


      <div>
        <h2 className="text-danger">Portfolio</h2>
        <img className="w-75" src="https://www.web4business.com.au/wp-content/uploads/2019/10/Websites-4-Small-Business-Portfolio.jpg" alt="" />
      </div>
     </div>
    </div>
  )
}
