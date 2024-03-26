import React from 'react'
import Header from '../common/header/header.jsx'
import Footer from '../common/footer/footer.jsx'


export default function Dashboard({children}) {
  return (
    <div>
    <Header/>
    {children}
    <Footer/>
    </div>
    
  )
}