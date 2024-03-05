import React from 'react'
import Layout from '../bar/Layout';
import Button from '../button/Button';

const aboutContents = [
  {
    title: 'AboutMe', 
    sub: '즐겁게 개발하며 살아가는 이효인 입니다.', 
    contents: '의류 브랜드의 오더관리 및 해외 공장과의 커뮤니케이션. 동종업계는 아니지만 업무 담당자와의 의사소통과  문제 해결능력을 많이 경험하였다고 생각합니다. 업무함에 있어 지혜롭게 대처하며, 열심히 배우며 나아가겠습니다.'
  },
];
export default function AboutRight({rightStyle,children}) {
  const {title, sub, contents} = aboutContents[0];

  return (
  <>
  <Layout>
    {children}
    <div 
      className={rightStyle ? 'right' : 'aboutMain'}>
      <Button type='category' text='About' /><br /><br />
      <div className='aboutText'>
        <h2>{title}</h2>
        <h3>{sub}</h3>
        <h5>{contents}</h5>
      </div>
    </div>
  </Layout>
  </>
  )
}
