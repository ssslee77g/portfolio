import React, {useState} from 'react'
import Layout from '../bar/Layout';
import Box from '../box/Box';
import Button from '../button/Button';
import { Link, useNavigate } from 'react-router-dom';

export default function ProjectRight({rightStyle,children}) {
const projectData = [
  {num : 1, header : '농촌빛길 - 관리자 페이지', text: '2023.8  ~  2023.11', imgSrc: 'admin'},
  {num : 2, header : '포트폴리오', text: '2024.2 ~ ', imgSrc: 'portfolio'}
];

  const navigate = useNavigate();

  const handleCallbackForProject = (event, num) => {
    console.log('클릭이벤트로 받은 num',num);
    const link = `/category/detail/${num}`;
    navigate(link);
  };



  return (
    <Layout>
      {children}
      <div
        className={rightStyle ? 'right' : 'aboutMain'}>
        {rightStyle ? <div></div> : <Button type='category' text='Project' />}
          <Box 
            boxData={projectData} 
            style={{width: '14rem'}}
            rStyle={rightStyle && {justifyContent: 'left'}}
            clickLink={handleCallbackForProject}/>
      </div>
    </Layout>
  )
}
