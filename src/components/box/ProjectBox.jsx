import React from 'react'
import './Box.css';

export default function ProjectBox({children}) {
  return (
    <div 
        className='box'
        style={{marginLeft: '1rem', width: '30rem', height: 'auto'}}>
        {children}
    </div>
  )
}
