import "./Menu.css";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


export default function Menu() {
  const triggers = document.getElementsByClassName('trigger');
  const triggerArray = Array.from(triggers).entries();
  const modals = document.getElementsByClassName('modal');
  const closeButtons = document.getElementsByClassName('close-button');

  for (let [index, trigger] of triggerArray) {
    const toggleModal = () => {
      modals[index].classList.toggle('show-modal');
    };
    trigger.addEventListener('click', toggleModal);
    closeButtons[index].addEventListener('click', toggleModal);
  }

  return (
    <div className="menu">
      <Header />
      <div className="column">
        <div className="row flex promoContainer">
          Menu
        </div>
      </div>
      <Footer />
    </div>
  )
}