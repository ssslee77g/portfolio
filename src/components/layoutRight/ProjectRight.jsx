import React from 'react'
import Layout from '../bar/Layout';
import Box from '../box/Box';
import Button from '../button/Button';

const projectData = [
  {header : '농촌빛길 - 관리자 페이지', text: '2023.8  ~  2023.11', imgSrc: 'admin'},
  {header : '포트폴리오', text: '2024.2 ~ ', imgSrc: 'portfolio'}
];

export default function ProjectRight({rightStyle,children}) {
  return (
    <Layout>
      {children}
      <div
        className={rightStyle ? 'right' : 'aboutMain'}>
        {rightStyle ? <div></div> : <Button type='category' text='Project' />}
          <Box 
            boxData={projectData} 
            style={{width: '14rem'}}
            rStyle={rightStyle && {justifyContent: 'left'}}/>
      </div>
    </Layout>
  )
}
