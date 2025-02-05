import React from 'react'
import Header from './conpanents/Header'
import Footer from './conpanents/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header/>
        <Outlet/>
      <Footer/>
    </div>
  )
}

export default App