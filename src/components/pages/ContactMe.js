import React, { useState } from "react";
import "../../styles/Contact.css";
import emailjs from "emailjs-com";

export default function ContactMe() {
  //declare new state variable call formState and initializing
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    nameError: false,
    emailError: false,
    messageError: false,
    IsSuccess: false,
  });

  //sumit method handler
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    //setting all validations to true
    setFormState({ ...formState, nameError: false });
    setFormState({ ...formState, messageError: false });
    setFormState({ ...formState, emailError: false });
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //checking name is empty
    if (formState.name === "") {
      setFormState({ ...formState, nameError: true });
      return;
      
    } else if (formState.email === "" || !regEx.test(formState.email)) {
      //checking email is empty or invalid email; using rajex expression
      setFormState({ ...formState, emailError: true });
      return;
    } else if (formState.message === "") {
      //checking message is empty
      setFormState({ ...formState, messageError: true });
      return;
    } else {
      //if validation success then send a mail
      emailjs
        .sendForm(
          "service_yhmy857",
          "template_3q3w60s",
          event.target,
          "tIcYn-4eFiLeqEJEz"
        )
        .then(
          (result) => {
            setFormState({
              ...formState,
              IsSuccess: true,
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  //textbox on text change validation method
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "email") {
      if (value === "") {
        setFormState({ ...formState, emailError: true });
      } else {
        setFormState({ ...formState, [name]: value, emailError: false });
      }
    } else if (name === "name") {
      if (value === "") {
        setFormState({ ...formState, nameError: true });
      } else {
        setFormState({ ...formState, [name]: value, nameError: false });
      }
    } else {
      if (value === "") {
        setFormState({ ...formState, messageError: true });
      } else {
        setFormState({ ...formState, [name]: value, messageError: false });
      }
    }
  };
  return (
    <div>
      <h1>Contact Me</h1>
      <form onSubmit={handleFormSubmit} method="POST">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Name..."
            name="name"
            className="form-input"
            onChange={handleChange}
            value={formState.name}
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            name="email"
            type="email"
            placeholder="Enter Email..."
            className="form-input"
            aria-describedby="emailHelp"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Enter Message..."
            className="form-input"
            onChange={handleChange}
            value={formState.message}
            rows="5"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {formState.nameError && (
        <span className="error">Name is required.Please enter the name.</span>
      )}
      {formState.emailError && (
        <span className="error">
          Email address is required.Please enter a valid email address
        </span>
      )}
      {formState.messageError && (
        <span className="error">Message is required.Please enter message.</span>
      )}
      {formState.IsSuccess && (
        <span className="success">
          Thanks for contacting me.Will get back to you soon.
        </span>
      )}
    </div>
  );
}
