import React from 'react'
import Header from './conpanents/Header'
import Footer from './conpanents/Footer'
import { Outlet } from 'react-router-dom'
import Contact from './pages/Contact'

function App() {
  return (
    <div>
      <Header/>
        <Outlet/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App