import React from 'react'
import './Menu.css';

import Button from '../button/Button'

const MainMenuInfo = [
    {type:'main' , text:'Home', link: '/'},
    {type:'main' , text:'About', link: '/category/about'},
    {type:'main' , text:'Skill', link: '/category/skill'},
    {type:'main' , text:'Project', link: '/category/project'},
    {type:'main' , text:'Contact', link: '/category/contact'},
];


export default function Menu() {

  return (
    <div className='mainMenuCtn'>
        {MainMenuInfo.map((item, index) => (
            <Button key={index} type={item.type} text={item.text} link={item.link} />
        ))}
    </div>
  )
}
