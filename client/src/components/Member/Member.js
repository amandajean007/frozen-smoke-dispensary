import "./Member.css";
// import { useState } from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

// use('FrozenSmoke');

function Member() {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('')

// let express = require('express');
// let path = require('path');
// let app = express();

// app.use(express.static(path.resolve(__dirname, 'public')));

// app.listen(process.env.PORT || 3000)

  return (
    <div className="contact">
      <Header />
      <h3>Become a member and receive 20% off every purchase!</h3>
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
      <Footer />
    </div>
  );
}

export default Member;