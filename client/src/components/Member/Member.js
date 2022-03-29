import React, { useState } from 'react';
import "./Member.css";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { postMember } from '../../utils/member_api_util';

function Member() {

  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, dob, email, phone);
    alert('Thanks for signing up!');
    // getMembers().then((members) => console.log(members));
    postMember({ name, dob, email, phone }).then((members) => console.log(members));

    const form = document.getElementById('form')
    form.reset();
  }

  return (
    <div className="contact">
      <Header />
      <h3>Become a member and receive 20% off every purchase!</h3>
      <div className="card">
        <form className="contact-form" id='form' method="post" action="/">
          <label >
            <input placeholder="Name" name='name' onChange={(e) => setName(e.target.value)} required />
          </label>
          <label >
            <input placeholder="Date of Birth" name='dob' onChange={(e) => setDob(e.target.value)} required />
          </label>
          <label >
            <input placeholder="E-Mail Address" name='email' onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label >
            <input placeholder="Phone Number" name='phone' onChange={(e) => setPhone(e.target.value)} required />
          </label>
        </form>
        <div className="signup">
          <button type="submit" name="submit" value='Submit' className="submit" onClick={handleSubmit}>Sign Up</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Member;