import React from 'react'
import './AboutPage.css';
import LayoutLeft from '../components/bar/LayoutLeft';
import LayoutBar from '../components/bar/LayoutBar';
import Button from '../components/button/Button';
import PeopleImg from '../components/img/PeopleImg';
import ProjectRight from '../components/layoutRight/ProjectRight';


export default function ProjectPage() {
  return (
    <ProjectRight rightStyle='1'>
      <LayoutLeft><br/>
        <div className='pageLeft'>
          <Button type='category' text='Project' /><br/><br/><br/>
          <PeopleImg />
        </div>
      </LayoutLeft>
      <LayoutBar />
    </ProjectRight>
  )
}
