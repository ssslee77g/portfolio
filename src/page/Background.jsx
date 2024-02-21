import React from 'react'
import { Outlet } from 'react-router-dom';
import './Background.css';


export default function Background() {
  return (
    <>
    <div className='background'></div>
    <main>
        <Outlet/ >
    </main>
    </>
  )
}
