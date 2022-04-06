import "./Entry.css";
import { Link } from "react-router-dom";
import smoke from "./vecteezy_indoor-shot-of-controlled-smoke-controlled-smoke-creating-heavy-clouds-from-left-to-right-on-dark-background-ideal-for-your-effects-in-your-projects-or-mystical-topics-in-your-footage-4k-4096-x_1787527.mp4"
import 'react-router-dom';

export default function Entry() {
  return (
    <div className="card">
      <video src={smoke} autoPlay muted loop id="myVideo"></video>

      <div className="overlay"></div>
      
      <div className="content">
        <h1 className="fsd">Frozen Smoke Dispensary
          <div className="addy">500 US-50 #103, Gunnison, CO 81230</div>
          <div className="phoneNumber">(970) 672-3495</div>
        </h1>
        <div className="aytobox">
          <h1 className="ayto">Are you twenty one or older?</h1>
          <div className="row">
            <Link to="/home">
              <button className="yes">Yes</button>
            </Link>
            <Link to="/sorry">
              <button className="no">No</button>
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
}