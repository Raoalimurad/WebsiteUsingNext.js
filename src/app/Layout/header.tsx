// Header.js
import React from 'react';
import Wrapper from '../components/Wrapper';
import logo from '@/app/asset/logo.png';
import Image from 'next/image';

const Header = () => {
  return (
    <Wrapper>
      <header>
        <div className='container'>
          <Image src={logo} alt="website logo" className='logo' />
        </div>
        <ul>
          <li>
            <a href="/" className="nav-link">Home</a>
          </li>
          <li>
            <a href="/About" className="nav-link">About</a>
          </li>
          <li>
            <a href="/contact" className="nav-link">Contact us</a>
          </li>
        </ul>
      </header>
    </Wrapper>
  );
};

export default Header;
