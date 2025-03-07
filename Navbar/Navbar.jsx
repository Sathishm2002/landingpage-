import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo-bookmark.svg'
import hamburger from '../../assets/icon-hamburger.svg'
import close from '../../assets/icon-close.svg'


const Navbar = () => {
 
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = ()=>{
    setIsOpen(!isOpen)
  }
  return (
    <nav className="navbar">
      <div>
        <img src={logo} alt="" />
      </div>
      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li>
          <a href="">FEATURES</a>
        </li>
        <li>
          <a href="">PRICING</a>
        </li>
        <li>
          <a href="">CONTACT</a>
        </li>
        <li>
          <a href="">
            <button>LOGIN</button>
          </a>
        </li>
      </ul>
      <div className="menu" onClick={toggleMenu}>
        <img src={hamburger} alt="" />
      </div>
    </nav>
  );
}

export default Navbar