import React, { useState } from 'react';
import Home from './Home/Home';
import Order from './Order/Order';
import Menu from './Menu/Menu';
import Contact from './Contact/Contact';
import Header from './Header';
import Footer from './Footer';
import logo from '../assets/weed.png';
import './portfolioContainer.css';
// import { Link } from 'react-router-dom';

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-modal-close]');
const overlay = document.getElementById('overlay');

console.log("portfolio container hit");

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
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Order') {
      return <Order />;
    }
    if (currentPage === 'Menu') {
      return <Menu />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="fsdTitle">
          Frozen Smoke Dispensary
        </p>
        <p>
          500 US-50 #103, Gunnison, CO 81230
        </p>
        <br/>
        <Footer />
      </header>
    </div>
  );
}