import React, {useState} from 'react';
import "./Member.css";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Member() {

  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

const handleSubmit = () => {
  console.log(name, dob, email, phone);

}

  return (
    <div className="contact">
      <Header />
      <h3>Become a member and receive 20% off every purchase!</h3>
      <div className="card">
        <form className="contact-form" method="post" action="/">
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