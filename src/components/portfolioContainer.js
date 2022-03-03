// import React, { useState } from 'react';
// import Home from './pages/Home';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';
// // import Footer from './Footer';
// import Header from './Header';
import logo from '../assets/weed.png';
import './portfolioContainer.css';
// import { Link } from 'react-router-dom';

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-modal-close]');
const overlay = document.getElementById('overlay');

console.log("hello");

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
  console.log("modal open button activated");
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('#modal')
    closeModal(modal)
    console.log("closets modal activated");
  })
})

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
  console.log("class list 'active' added");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
  console.log("class list 'active' removed");
}

export default function PortfolioContainer() {
  // const [currentPage, setCurrentPage] = useState('Home');

  // const renderPage = () => {
  //   if (currentPage === 'Home') {
  //     return <Home />;
  //   }
  //   if (currentPage === 'Projects') {
  //     return <Projects />;
  //   }
  //   return <Contact />;
  // };

  // const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      {/* <Header currentPage={currentPage} handlePageChange={handlePageChange} /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="fsdTitle">
          Frozen Smoke Dispensary
        </p>
        <p>
          500 US-50 #103, Gunnison, CO 81230
        </p>
        <br/>
        <h3 className="areYouTO">
          ARE YOU 21 OR OLDER?
        </h3>
        <div>
          <ul className="nav-item">
            {/* eslint-disable-next-line */}
            <a className="button">YES</a>
          </ul>
          <ul className="nav-item">
          {/* eslint-disable-next-line */}
            <a data-modal-target="#modal" className='button'>
              NO
            </a>
            <div className="modal" id="modal">
              <button data-modal-close className="close-button" id="closeButton">&times;</button>
              <div className="modal-body">
                Sorry, you must be 21 or older to continue to this website. 😢
              </div>
            </div>
            <div id="overlay"></div>
          </ul>
        </div>
      </header>
    </div>
  );
}