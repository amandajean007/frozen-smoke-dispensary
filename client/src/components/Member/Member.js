import "./Member.css";
import { useState } from "react";

function Member() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')

  return (
    <div className="contact">
      <h3>Become a member and receive 20% off every trip!</h3>
      <div className="card">
        <form className="contact-form">
          <label >
            Name:
            <input type='text' name="name" value={name} onChange={(e) => setName(e.target.value)} required/>
          </label>
          <label >
            Date of Birth:
            <input type='email' name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </label>
          <label >
            Email:
            <input type='email' name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </label>
          <label >
            Phone Number:
            <input type='email' name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </label>
          
        </form>
      </div>
      
    </div>
  );
}

export default Member;