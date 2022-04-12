import './MasonPortal.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Portal() {

  return (
    <div className="portal">
      <Header />
      <div className="row portal-row">
        <div className="col portal-col">
          <input type="text" className="form-control" placeholder="username"></input>
          <input type="text" className="form-control" placeholder="password"></input>
        </div>
      </div>
      <Footer />
    </div>
  );
}