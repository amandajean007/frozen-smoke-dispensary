import './MasonPortal.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Mason() {

    return (
        <div className="mason">
            <Header />
            <div className="row mason-row">
                <div className="col mason-col">
                    <h1 className="box">HELLO BOSS.</h1>
                    <div className="row flex">
                        <div className="col box">
                            Members:
                            <button className="row flex">
                                Find Members
                            </button>
                            <button className="row flex">
                                Create Member
                            </button>
                            <button className="row flex">
                                Update Member
                            </button>
                            <button className="row flex">
                                Delete Member
                            </button>
                        </div>
                        <div className="col box">
                            sales?
                        </div>
                        <div className="col box">
                            sales?
                        </div>
                        <div className="col box">
                            sales?
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}