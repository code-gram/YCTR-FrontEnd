import React from 'react'
import Header from '../header/header.jsx'
import Footer from '../footer/footer.jsx'


export default function Layout({children}) {
  return (
    <div>
    <Header/>
    {children}
    <Footer/>
    </div>
    
  )
}