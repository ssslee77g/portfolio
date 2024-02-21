import React from 'react'
import './Layout.css';

export default function Layout({children, style}) {
  return (
    <div className='layout'
      style={style}>
      {children}
    </div>
  )
}
