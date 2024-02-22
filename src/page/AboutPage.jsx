import React from 'react'
import './AboutPage.css';
import LayoutLeft from '../components/bar/LayoutLeft';
import LayoutBar from '../components/bar/LayoutBar';
import Me from '../img/MeDark.svg';
import AboutRight from '../components/layoutRight/AboutRight';

export default function AboutPage() {

  return (
    <AboutRight rightStyle='1'>
      <LayoutLeft>
        <div className='aboutLeft'>
          <img src={Me} alt='img' width='100rem'/>
          <h4>Developer<br/>이효인</h4>
        </div>
      </LayoutLeft>
      <LayoutBar />      
    </AboutRight>
  )
}
