import React from 'react'
import './AboutPage.css';
import Layout from '../components/bar/Layout';
import LayoutLeft from '../components/bar/LayoutLeft';
import LayoutRight from '../components/bar/LayoutRight';
import LayoutBar from '../components/bar/LayoutBar';
import Button from '../components/button/Button';
import Box from '../components/box/Box';
import PeopleImg from '../components/img/PeopleImg';

const contactData = [
  {header: 'Email ssslee79@gmail.com Github Figma ERD Cloud'}
]
export default function ContactPage({img}) {
  return (
    <Layout>
      <LayoutLeft><br/>
        <div className='pageLeft'>
          <Button type='category' text='Contact' /><br/><br/><br/>
          <PeopleImg />
        </div>
      </LayoutLeft>
      <LayoutBar />
      <LayoutRight>
        <Box boxData={contactData} />
      </LayoutRight>
    </Layout>
  )
}
