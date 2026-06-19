import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function About() {
  return (
    <div className='pt-5 ps-5 '>
            
      <Link className='text-decoration-none bg-primary text-light p-2 fs-3 rounded-pill  ps-3 pe-3 ' to={""}>My Profile</Link>

      <Link className='text-decoration-none bg-primary text-light p-2 fs-3 rounded-pill  ps-3 pe-3 ms-3' to={"company"}>Company</Link>
      <hr />
      <Outlet/>
    </div>
    
  )
}
