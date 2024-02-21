import React from 'react'
import './Box.css';
import Admin from '../../img/project-admin.svg';
import Portfolio from '../../img/project-Portfolio.svg';

export default function Box({boxData, style, rStyle}) {

    console.log(boxData);
  return (
    <div 
      className='boxContainer'
      style={rStyle}>
    {boxData.map((item, index) => (
        <div className='box' key={index}
          style={style}>
            <div>
              <h3>{item.header}</h3>
              <p>{item.text}</p>
            </div>
            {item.imgSrc && 
            <img src={item.imgSrc === 'admin' ? Admin :
            (item.imgSrc === 'portfolio' ? Portfolio : '')} alt='project'/>}
        </div>
    ))}
    </div>
  );
}
