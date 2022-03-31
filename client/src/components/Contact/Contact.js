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
      <div className="reference">
        <div className="contactCard">
            <a id="telephone" href="tel:9706723495">(970)672-3495</a><br/>
            <a id="telephone" target="_blank" rel="noreferrer" href="mailto:frozensmokedispensary@gmail.com">frozensmokedispensary@gmail.com</a><br/>
            <a id="telephone" target="_blank" rel="noreferrer" href="https://www.google.com/maps/dir//frozen+smoke+dispensary/@38.5411617,-106.9426253,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x873f92e6665ea4c9:0xd60874f3d9ec7e4b!2m2!1d-106.9404632!2d38.5393374">500 US-50 #103, Gunnison, CO 81230</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;