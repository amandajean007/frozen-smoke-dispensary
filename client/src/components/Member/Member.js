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
    
    alert('Thanks for signing up! You will now recieve 20% off evetything when you shop with us!');
    postMember({ name, dob, email, phone }).then((members) => console.log(members));

    const form = document.getElementById('memberForm');
    console.log(form);
    form.reset();
    
  }

  return (
    <div className="member">
      <Header />
      <div className="memberCard">
        <div className="memberCardRow">
          <p>Become a member and receive 20% off every purchase!</p>
          <form className="contact-form" id='memberForm' method="post" action="/">
            <input placeholder="Name" name='name' onChange={(e) => setName(e.target.value)} required />
            <input placeholder="Date of Birth" name='dob' onChange={(e) => setDob(e.target.value)} required />
            <input placeholder="E-Mail Address" name='email' onChange={(e) => setEmail(e.target.value)} required />
            <input placeholder="Phone Number" name='phone' onChange={(e) => setPhone(e.target.value)} required />
          </form>
          <div className="signup">
            <button type="submit" name="submit" value='Submit' className="submit" onClick={handleSubmit}>Sign Up</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Member;