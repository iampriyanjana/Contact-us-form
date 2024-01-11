import React,{useState} from 'react'
import Button from './Button';
function ContactForm() {
   const [name,setName] = useState("");
   const [email,setEmail] = useState("");
   const [text,setText] = useState("");

   function Submit(event){
      event.preventDefault();
      setName(event.target[0].value);
      setEmail(event.target[1].value);
      setText(event.target[2].value);
   }
  return (
     <form onSubmit={Submit}>
        <div className='Contact-form'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name'/>
        </div>
        <div className='Contact-form'>
            <label htmlFor='Email'>Email</label>
            <input type='text' name='email'/>
        </div>
        <div className='Contact-form'>
            <label htmlFor='text'>Text</label>
            <input type='text' name='text'/>
        </div>
        <div className='submitBtn'>
        <Button btnText="SUBMIT"/>
        <div>
         {name + " " + email + " "+ text}
        </div>
      </div>
     </form>

  )
}

export default ContactForm