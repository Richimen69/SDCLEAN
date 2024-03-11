import { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Home from './views/home'
import Navbar from './components/Navbar'
import Cotizar from './views/cotizar'
import Servicios from './views/servicios'
import Certificados from './views/certificados'
import Footer from './components/Footer'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />        
    },
    {
      path: "/cotizar",
      element: <Cotizar />,
    },
    {
      path: "/servicios",
      element: <Servicios />,
    },
    {
      path: "/certificados",
      element: <Certificados />,
    },
  ])
  return (
    <div className='App'>
      <Navbar />
      <RouterProvider router={router} />
      <Footer/>
    </div>
  )
}
export default App
