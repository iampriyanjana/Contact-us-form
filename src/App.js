import React from 'react';
import Navigation from './components/Navigation';
import Contact from './components/Contact';
import Button from './components/Button';
import ContactForm from './components/ContactForm';
import {MdMessage} from 'react-icons/md';
import {MdCall} from 'react-icons/md';
import pic from './components/images/Service24_7-pana1.png'

function App() {
  return (
    <div className='container'>
      <Navigation/>
      <Contact/>
      <div className='button'>
       <Button btnText="VIA SUPPORT CHAT" icon={<MdMessage/>} isOutline={false}/>
       <Button btnText="VIA CALL" icon ={<MdCall/>} isOutline={false}/> 
      </div>     
      <div className='btt'>
        <Button btnText="VIA EMAIL FORM" icon ={<MdMessage/>} isOutline={true}/>
      </div>
      <div>
        <ContactForm/>
      </div>
      <div className='service'>
        <img src={pic} alt="24_7 service"/>
      </div>
    </div>
  );
}

export default App;
