import React from 'react';
import './Layout.css'

const Layout = ({children}) => {
  return (
    <div className='App'>
     <div className='bg-layout'>Todo List App</div>
     <div className='bg-container'>
        {children}
     </div>
    </div>
  )
}

export default Layout