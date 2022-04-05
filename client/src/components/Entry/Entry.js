import "./Entry.css";
import { Link } from "react-router-dom";

export default function Entry() {
  return (
    <div className="card">
      <div className="content">
        <h1 className="fsd">Frozen Smoke Dispensary
          <p className="addy">500 US-50 #103, Gunnison, CO 81230</p>
        </h1>
        <div className="aytobox">
          <h1 className="ayto">Are you twenty one?</h1>
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