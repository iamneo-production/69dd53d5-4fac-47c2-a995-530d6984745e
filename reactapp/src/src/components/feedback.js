import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addFeedback } from './api';

const FeedForm = () => {
//   const [email, setEmail] = useState('');
//   const [Name, setName] = useState('');
//   const[Subject,setSubject]=useState('');
//   const[Message,setMessage]=useState('');
const[formdata,setFormdata]= useState({
    email: '',
    name: '',
    subject: '',
    message: ''
   
  })
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
    // console.log(formdata);
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await addFeedback(formdata);
      navigate('/')
    }
    catch(error){
      console.log(error);
    }

    console.log(formdata);
  }
  
  
  
//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };
  
//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };
//   const handleSubjectChange = (event)=>{
//     setSubject(event.target.value);
//   }
//   const handleMessageChange = (event)=>{
//     setMessage(event.target.value);
//   }
  
//   const handleSubmit = (event) => {
//     // event.preventDefault();
//     // if (!email || !password) {
//     //   alert("please enter Email and password.");
//     //   return;
//     // }
//     // Add your login logic here
//     console.log('Login form submitted');
//     console.log('Email:', email);
//     console.log('Name:', Name);
//     console.log('Subject',Subject);
//     console.log('Message',Message);
//   //  Navigate('/Home')
//   };

  return (

    <div style={{backgroundImage: 'url("https://images.blocksurvey.io/cdn-cgi/imagedelivery/G6cPOuGZ4Z_bEV13gBxixw/templates/resort-survey-questionnaire.png/s")',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}className="down">
      <div className="login-form">
        <h2>&nbsp;&nbsp;&nbsp;FEEDBACK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
        <form onSubmit={handleSubmit} >
          <input
          style={{width: '50%',padding:'25px'}}
            type="email"
            placeholder="Email"
            id='email'
            onChange={handleChange}
            required
          /><br></br><br></br>
          <input
          style={{width: '50%',padding:'25px'}}
            type="name"
            placeholder="Name"
            id='name'
            onChange={handleChange}
            required
          /><br></br><br></br>
             <input
             style={{width: '50%',padding:'25px'}}
            type="name"
            placeholder="Subject"
            id='subject'
            onChange={handleChange}
            required
          /><br></br><br></br>
            <input
            style={{width: '50%',padding:'25px'}}
            type="name"
            placeholder="Message"
            id='message'
            onChange={handleChange}
            required
          /><br></br><br></br>
          <div className="button">
          <button style={{width: '50%'}} type='submit' wid onChange={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default FeedForm;