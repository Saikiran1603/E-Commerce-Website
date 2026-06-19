import React, { useRef, useState } from 'react'

export default function Contact() {
 const ref=useRef();
  const [data,setData]=useState({
    name:"",
    email:"",
    phone:"",
    msg:"",
  })
  
  const [error,setError]=useState({})

  const validation=()=>{
 
    const newErrors={}

  if(!data.name){
     newErrors.name="Name required!"
  }

  if(!data.email){
    newErrors.email="Email required!"
  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)){
    newErrors.email="Invalid Email!"
  }

  if(!data.phone){
    newErrors.phone="Phone number required!"
  }else if(!(data.phone.length>9 && data.phone.length<11)){
    newErrors.phone="Enter 10 digit number"
  }

  if(!data.msg){
    newErrors.msg="message required"
  }

  setError(newErrors)

  return Object.keys(newErrors).length===0
  }

  const handleInput=(e)=>{
    
     setData({
      ...data,[e.target.name]:e.target.value
     })
  }
  
  
  const handleSubmit=(e)=>{
     e.preventDefault()
     if(validation()){
      alert("Form Submitted")
     setData({
      name:"",
      email:"",
      phone:"",
      msg:""
     })
     setError({})
     }
  }
  

  return (
    <div className='formcon d-flex justify-content-center '>
     
      <form onSubmit={handleSubmit}  className='form border d-flex flex-column  mt-3  align-items-center'>
        <h2 className='pt-3 pb-3'> Registration form</h2>
        <div className='fc'>
        <label htmlFor="name" onClick={()=>ref.current.focus()}>Name: </label>
        <input  ref={ref} className='input1' type="text"  value={data.name} name='name' placeholder='name' onChange={handleInput}/>
       <p className='para text-danger'>{error.name}</p>
        
       
       <label  htmlFor="email" >Email: </label>
       <input  className='input2' type="email" value={data.email} name='email' placeholder='email'onChange={handleInput}/>
       <p className='para  text-danger'>{error.email}</p>
       
       <label  htmlFor="no" >Phone No: </label>
       <input className='input3' type="text" value={data.phone} name='phone' placeholder='Phone Number' onChange={handleInput}/>
       <p className='para text-danger'>{error.phone}</p>
       
       <label  htmlFor="msg">Message: </label>
       <textarea  className='input4' name="msg" id="msg" value={data.msg} name='msg' placeholder='Type message' onChange={handleInput}></textarea>
       <p className='para text-danger'>{error.msg}</p>
       </div>
       <button className='bg-info btn btn-outline-primary text-light' type='submit'>Submit</button>
      </form>
    </div>
  )
}
