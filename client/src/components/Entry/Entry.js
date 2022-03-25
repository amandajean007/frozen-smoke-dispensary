import "./Entry.css";
import { Link } from "react-router-dom";


export default function Entry() {

  return (
    <div className="row">
      <div className="column">
        <div className="box">
          <h1 className="fsd">Frozen Smoke Dispensary
            <p className="addy">500 US-50 #103, Gunnison, CO 81230</p></h1>
          <div className="aytobox">
            <div className="aytoboxcolumn">
              <h1 className="ayto">Are you twenty one?</h1>
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
    </div>
  );
}