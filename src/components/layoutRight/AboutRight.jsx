import React from 'react'
import Layout from '../bar/Layout';
import Button from '../button/Button';

const aboutContents = [
  {
    title: 'AboutMe', 
    sub: '즐겁게 개발하며 살아가는 이효인 입니다.', 
    contents: '아웃도어 브랜드의 오더 관리, 디자이너와의 커뮤니케이션, 해외 공장과의 납기 및 생산 관리,수출입 선적 관리 및 회계 업무를 하였습니다. 다양한 업무 담당자와 의사소통하며 업무를 해내어 나갔기 때문에 원활한 의사소통이 가능합니다. 동종업계는 아니지만업무 담당자와의 의사소통과 문제 해결능력을 많이 경험하였다고 생각합니다.업무를 함에 있어 지혜롭게 대처하며, 신입의 자세로 열심히 배우며 나아가겠습니다.'
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
        <h1>{title}</h1>
        <h2>{sub}</h2>
        <h5>{contents}</h5>
      </div>
    </div>
  </Layout>
  </>
  )
}
