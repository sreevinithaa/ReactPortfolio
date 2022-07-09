import React, { useState } from "react";
import "../../styles/Contact.css";
import emailjs from 'emailjs-com';

export default function ContactMe() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    nameError: false,
    emailError: false,
    messageError: false,
    IsSuccess:false
  });
 
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setFormState({ ...formState, nameError: false });
    setFormState({ ...formState, messageError: false });
    setFormState({ ...formState, emailError: false });
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(formState.name=="")
    {
      setFormState({ ...formState, nameError: true });
      return;
    }  
    else if (formState.email == "" || !regEx.test(formState.email)) 
    {
      setFormState({ ...formState, emailError: true });
      return;
    }   
    else if(formState.message=="")
    {
      setFormState({ ...formState, messageError: true });
      return;
    }
    else{
      emailjs.sendForm('service_yhmy857', 'template_3q3w60s', event.target,'tIcYn-4eFiLeqEJEz')
      .then((result) => {
       
        setFormState({ ...formState, IsSuccess: true,name:"",email:"",message:"" });
      }, (error) => {
          console.log(error.text);
      });
     
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "email") {
      
      if (value == "" ) {
        setFormState({ ...formState, emailError: true });
      } else {
        setFormState({ ...formState, [name]: value ,emailError:false});
       
      }
    } else if (name === "name") {
      if (value == "") {
        setFormState({ ...formState, nameError: true });
      } else {
        setFormState({ ...formState, [name]: value,nameError:false });
      }
    } else {
      if (value == "") {
        setFormState({ ...formState, messageError: true });
      } else {
        setFormState({ ...formState, [name]: value ,messageError:false});
      }
    }
  };
  return (
    <div>
      <h1>Contact Me</h1>
      <form  onSubmit={handleFormSubmit} method="POST">
        <div className="form-group">
          <label >Name</label>
          <input
            type="text"
            placeholder="Enter Name..."
            name="name"
            className="form-input"
            onChange={handleChange}
           
            value={formState.name}
          />
          {formState.nameError && (
            <span className="error">
              Name is required.Please enter the name.
            </span>
          )}
        </div>
        <div className="form-group">
          <label >Email address</label>
          <input
            name="email"
            type="email"
            placeholder="Enter Email..."
            className="form-input"
            aria-describedby="emailHelp"
            value={formState.email}
            onChange={handleChange}
          />
          {formState.emailError && (
            <span className="error">
              Email address is required.Please enter a valid email address
            </span>
          )}
        </div>
        <div className="form-group">
          <label >Message</label>
          <textarea
            name="message"
            placeholder="Enter Message..."
            className="form-input"
            onChange={handleChange}
            value={formState.message}
            rows="5"
          ></textarea>
          {formState.messageError && (
            <span className="error">
              Message is required.Please enter message.
            </span>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {formState.IsSuccess && (
            <span className="success">
              Thanks for contacting me.Will get back to you soon.
            </span>
          )}
    </div>
  );
}
