import React from 'react';
import { Link } from 'react-router-dom';
import './NavBarHandle.css';

const NavBarHandle = () => {
  const style = {
    fontFamily: 'Rufina',
    fontSize: '36px',
  };
  return (
    <div className="navbar">
      <div className="left">
        <ul>
          <li className='decorator'>
            <Link className="link" to="/about">About</Link>
          </li>
          <li className='decorator'>
            <Link className="link" to="/services">Services</Link>
          </li>
          <li className='decorator'>
            <Link className="link" to="/price">Prices</Link>
          </li>

        </ul>
      </div>
      <div className="middle">
        <p style={style}>Fair Business Growth</p>
      </div>
      <div className="right">
        <div className="right-content">
          <p className='decorator'>
            <Link className='right_link' to="/contact">Contact</Link>
          </p>
          <p className='decorator'>
            <Link className='right_link' to="/inspiration">Inspiration</Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default NavBarHandle;