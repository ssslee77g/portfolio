import React from 'react';
import './AboutPage.css';
import LayoutLeft from '../components/bar/LayoutLeft';
import LayoutBar from '../components/bar/LayoutBar';
import Button from '../components/button/Button';
import PeopleImg from '../components/img/PeopleImg';
import SkillRight from '../components/layoutRight/SkillRight';

export default function SkillPage() {


  return (
    <SkillRight rightStyle='1'>
      <LayoutLeft><br/>
        <div className='pageLeft'>
          <Button type='category' text='Skill' /><br/><br/><br/>
          <PeopleImg />
        </div>
      </LayoutLeft>
      <LayoutBar />
    </SkillRight>
  )
}
