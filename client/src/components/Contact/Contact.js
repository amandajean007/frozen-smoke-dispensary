import React, {useState} from 'react';
import "./Contact.css";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Contact() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="contact">
      <Header />
      <h1>Contact Us</h1>
      <div className="card">
        <p>(970)672-3495</p>
        <p>500 US-50 #103, Gunnison, CO 81230</p>
        <form className="contact-form">
          <label >
            <input type='text' name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required/>
          </label>
          <label >
            <input type='email' name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </label>
          <label>
            <textarea name="message" cols="50" rows="10" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required/>
          </label>
          <button type="submit" name="submit"value='Submit' className="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;