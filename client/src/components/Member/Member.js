import "./Member.css";
import { useState } from "react";
import Header from '../Header/Header';

function Member() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')

  return (
    <div className="contact">
      <Header />
      <h3>Become a member and receive 20% off every trip!</h3>
      <div className="card">
        <form className="contact-form">
          <label >
            Name:
            <input required/>
          </label>
          <label >
            Date of Birth:
            <input required/>
          </label>
          <label >
            Email:
            <input required/>
          </label>
          <label >
            Phone Number:
            <input required/>
          </label>
          
        </form>
      </div>
      
    </div>
  );
}

export default Member;