import React from 'react'
import './Box.css';
import Admin from '../../img/project-admin.svg';
import Portfolio from '../../img/project-Portfolio.svg';

import Java from '../../img/skill/Java-Light.svg';
import Spring from '../../img/skill/Spring-Light.svg';
import MySql from '../../img/skill/MySQL-Light.svg';

import CSS from '../../img/skill/CSS.svg';
import HTML from '../../img/skill/HTML.svg';
import JQuery from '../../img/skill/JQuery.svg';
import Reactjs from '../../img/skill/React.svg';

import Github from '../../img/skill/Github-Dark.svg';
import Git from '../../img/skill/Git.svg';
import VS from '../../img/skill/VSCode-Dark.svg';
import Figma from '../../img/skill/Figma-Dark.svg';



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
              {item.type === 'skill' ? '' : <p>{item.text}</p>}
            </div>
            <div >
            {item.header ==='Back-end' 
              ? <><img src={Java} alt='' width='45' />
              <img src={Spring} alt=''  width='45'/>
              <img src={MySql} alt=''  width='45'/></>
              : (item.header ==='Front-end' ?
              <><img src={HTML} alt=''  width='45'/>
                <img src={CSS} alt=''  width='45'/>
                <img src={JQuery} alt=''  width='45'/>
                <img src={Reactjs} alt=''  width='45'/></>
              : (item.header ==='Tool' && 
              <><img src={VS} alt=''  width='45'/>
              <img src={Github} alt=''  width='45'/>
              <img src={Git} alt=''  width='45'/>
              <img src={Figma} alt=''  width='45'/></>))}
            </div>
            {item.imgSrc && 
            <img src={item.imgSrc === 'admin' ? Admin :
            (item.imgSrc === 'portfolio' ? Portfolio : '')} alt='project'/>}
        </div>
    ))}
    </div>
  );
}
