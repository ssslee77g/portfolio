import React from 'react'
import Layout from '../bar/Layout';
import Button from '../button/Button';
import ContactBox from '../box/ContactBox';
import ContactMe from '../../img/MainPeople.svg'

const contactData = [
  {text: '연락처', content: '010-9307-6514'},
  {text: 'Email'},
  {text: 'Github'},
];
export default function ContactRight({rightStyle,children}) {
  return (
    <Layout>
      {children}
      <div
        className={rightStyle ? 'right' : 'aboutMain'}
        style={{left: '8rem'}}>
        {/* {rightStyle ? <img src={ContactMe} alt='img' width='120rem' style={{padding: '4rem'}}/> : <p></p>} */}
        {rightStyle ? <div></div> : <Button type='category' text='CONTACT' />}
        <br /><br />
        <ContactBox 
          data={contactData}
          rStyle={rightStyle && {justifyContent: 'left', textAlign: 'center'}} />
      </div>
    </Layout>
  )
}
