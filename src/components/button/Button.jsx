import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Button.css'

export default function Button({type, text,style, click, link, imgSrc}) {
  const navigate = useNavigate();
  return (
    <div 
      className={type}
      stype={style}
      onClick={click ? click : (link ? () => {
        navigate(link)
      } : null)}>
      {imgSrc && <img src={imgSrc} alt='imgBin' />}
      {text}</div>
  )
}
