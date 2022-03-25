import "./Menu.css";
import Header from '../Header/Header';

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
      <div>
        <Header />
        This should be the menu
      </div>
  )
}