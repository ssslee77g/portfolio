import React from 'react'
import { Outlet } from 'react-router-dom';

import Menu from '../components/bar/Menu'

export default function LayoutMain() {
  return (
    <>
      <Menu />
      <main className='App'>
        <Outlet/ >
      </main>
    </>
  )
}
