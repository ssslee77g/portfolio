import React from 'react'

export default function LayoutRight({children, style}) {
  return (
      <div className='right'
        style={style}>
          {children}</div>
  )
}
