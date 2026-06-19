import React from 'react'
import photoImg from '../assets/photo.png'
export default function Profile() {
  return (
    <div className='bg-warning  d-flex flex-column align-items-center'>
      {/* <h1 className='text-primary pt-2'>My Profile</h1> */}

      <div className='d-flex gap-5 mt-5 mb-5 pe-2 d-flex  justify-content-center'>
        <img src={photoImg} alt=""  className='photo ms-2 ' />
        <div  className='d-flex flex-column justify-content-center'>
          <h1>I'm <span className='text-primary'> Saikiran Palakurla </span></h1>
          <h2 className='text-secondary'>Frontend Developer</h2>
          <h4>Skills: <span>Java, HTML, CSS, JavaScript, React.js</span></h4>
        </div>
      </div>
    </div>
  )
}
