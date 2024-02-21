import React from 'react'
import Layout from '../bar/Layout';
import Box from '../box/Box';
import Button from '../button/Button';
import ContactBox from '../box/ContactBox';


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
        {rightStyle ? <div></div> : <Button type='category' text='Contact' />}
        <ContactBox 
          data={contactData}
          rStyle={rightStyle && {justifyContent: 'left', textAlign: 'center'}} />
      </div>
    </Layout>
  )
}
