import React from 'react'
import Layout from '../bar/Layout';
import Box from '../box/Box';
import Button from '../button/Button';

const skillData = [
  { type: 'skill', header : 'Back-end', text: 'Java, Spring, JSP&Servlet, MyBatis, Oracle, MySQL, MariaDB'},
  { type: 'skill', header : 'Front-end', text: 'JavaScript, jQuery, HTML5, CSS3, React.js'},
  { type: 'skill', header : 'Tool', text: 'Apache Tomcat, ERD Cloud, Eclipse, Spring STS, SQL Developer, Visual studio Code, Figma, Git, GitHub'}
];

export default function SkillRight({rightStyle,children}) {
  return (
    <Layout>
      {children}
      <div className={rightStyle ? 'right' : 'aboutMain'}>
      {rightStyle ? <div></div> : <Button type='category' text='Skill' />}
        <Box 
          boxData={skillData}
          rStyle={rightStyle && {justifyContent: 'left', textAlign: 'center'}}/>
      </div>
    </Layout>
    
  )
}
