import React from 'react';
import './Box.css';
import { IoMailUnreadSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { MdFilterDrama } from "react-icons/md";

const github = 'https://github.com/ssslee77g/ssslee77g.github.io';
const email = 'https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F%26ogbl%2F&emr=1&ltmpl=default&ltmplcache=2&osid=1&passive=true&rm=false&scc=1&service=mail&ss=1&ifkv=ATuJsjye8MkdsNyIcOyzswQWnbymSG_Fz6rEg2beAeQSmzRJYnXWH00gkNe7JAv-3xA8xLImif5mVw&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin';

export default function ContactBox({data, rStyle}) {

  const openTab = (type) => {
    switch(type) {
      case 'Github' : window.open(github,'f'); break;
      case 'Email' : window.open(email,'f'); break;
      default : console.log('notFound');
    } 
  };

  return (
    <div 
    className='boxContainer'
    style={rStyle}>
      <div className='box' 
        style={{width: '12rem'}}>
        {data.map((item, index) => (
            <div key={index}>
                <div className='contactBox'>
                  {item.text}
                  <div>{item.content}</div>
                </div>
                <div className='contactIcon'>
                  {item.text === 'Github' ? <div onClick={() => openTab(item.text)}><FaGithub size="30" /></div>
                  : (item.text === 'Email' ? <div onClick={() => openTab(item.text)}><IoMailUnreadSharp size="30" /></div>
                  : (item.text === 'Figma' ? <div onClick={() => openTab(item.text)}><FaFigma size="30" /></div>
                  : (item.text === 'ERD Cloud' ? <div onClick={() => openTab(item.text)}><MdFilterDrama size="30" /></div>
                  : (item.text === '연락처' &&
                    <div>
                    </div>)
                  )))}
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}
