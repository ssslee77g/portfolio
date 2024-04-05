import React, {useEffect, useState} from 'react'
import './MainImg.css';

import MainPeople from '../../img/MainPeople.svg';
import ContactMe from '../../img/MeBigger.svg';
import Balloon from '../../img/balloon.svg';

export default function MainImg() {
    const [ balloon, setBalloon ] = useState(false);


    setTimeout( () => {
        setBalloon(true);
    },3000);


  return (
    <div className='MainImg'>
        {/* <p>PORTFOLIO</p> */}
        <div className='imgBox'>
            <img className='imgEffect'  src={ContactMe} alt='people'/>
        </div>
        {/* <div className='balloonBox'>
            {balloon &&<div>
            <img className='balloon' src={Balloon} alt='balloon' />
            <div className='balText1'>안녕하세요</div>
            <div className='balText2'>이효인의</div>
            <div className='balText3'>포트폴리오 입니다.</div>
            </div>}
        </div>   */}
    </div>
  )
}
