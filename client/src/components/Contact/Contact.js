import React, { useState } from 'react';
import "./Contact.css";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { postMessage } from '../../utils/message_api_util';

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    alert('Thank you for the message!');
    // getMessages().then((messages) => console.log(messages));
    postMessage({ name, email, message }).then((messages) => console.log(messages));

    const form = document.getElementById('contactForm')
    console.log(form);
    form.reset();
  }

  return (
    <div className="contact">
      <Header />
      <h1>Contact Us</h1>
      <div className="contactCard">
        <p>(970)672-3495</p>
        <p>500 US-50 #103, Gunnison, CO 81230</p>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;