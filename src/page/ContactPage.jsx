import React from 'react'
import './AboutPage.css';
import LayoutLeft from '../components/bar/LayoutLeft';
import ContactRight from '../components/layoutRight/ContactRight';
import LayoutBar from '../components/bar/LayoutBar';
import Button from '../components/button/Button';
import PeopleImg from '../components/img/PeopleImg';

const contactData = [
  {header: 'Email ssslee79@gmail.com Github Figma ERD Cloud'}
]
export default function ContactPage() {
  return (
    <ContactRight rightStyle='1' >
      {/* <LayoutLeft><br/>
        <div className='pageLeft'>
          <Button type='category' text='Contact' /><br/><br/><br/>
          <PeopleImg />
        </div>
      </LayoutLeft> */}
      {/* <LayoutBar /> */}
    </ContactRight>
  )
}
