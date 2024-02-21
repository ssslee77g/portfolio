import React from 'react'
import MainImg from '../components/img/MainImg'
import AboutRight from '../components/layoutRight/AboutRight'
import SkillRight from '../components/layoutRight/SkillRight'
import ProjectRight from '../components/layoutRight/ProjectRight'
import ContactRight from '../components/layoutRight/ContactRight'


export default function MainPage() {
  return (
  <>
    <MainImg />
    <AboutRight />
    <SkillRight />
    <ProjectRight />
    <ContactRight />
  </>
  )
}
