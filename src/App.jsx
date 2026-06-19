import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import MainLayout from './Router/MainLayout'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'


export default function App() {
  return (
    <div>
     
      <BrowserRouter>
       
        <MainLayout/>
      </BrowserRouter>
    </div>
  )
}
