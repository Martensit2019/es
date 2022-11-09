import React, { useState } from 'react'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import Sidebar from '../components/sidebar/sidebar'


const MainLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  // const isOpen = true

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev)
    console.log(isOpen)
  }
  const getClassesSidebar = () => {
    let classes = 'sidebar'
    return (classes += isOpen ? ' open' : '')
  }
  return (
    <div className="wrapper">
      <div className={getClassesSidebar()}>
       <Sidebar />
      </div>
      <div className="content">
        <Header isOpen={isOpen} toggleSidebar={toggleSidebar} />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
