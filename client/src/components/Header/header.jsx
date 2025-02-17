import React from 'react';
import './header.css';
import logo from '../../assets/image.png';  



const Header = () => {
  return (
    <header className="header">
      <div className="logo"><img src={logo} alt="Logo" /></div>
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      {/* <button className="search-btn">🔍</button> */}
      <div className="auth">
      <button className='login'>Login</button>
      <button className='register'>register</button>
      </div>
    </header>
  );
};

export default Header;