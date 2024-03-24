import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { GrProjects } from "react-icons/gr";
import { BiMessageSquareDetail } from 'react-icons/bi';
import './nav.css';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('/');

  return (
    <nav>
      <Link to="/" onClick={() => setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}>
        <AiOutlineHome />
      </Link>
      <Link to="/about" onClick={() => setActiveNav('/about')} className={activeNav === '/about' ? 'active' : ''}>
        <AiOutlineUser />
      </Link>
      <Link to="/experience" onClick={() => setActiveNav('/experience')} className={activeNav === '/experience' ? 'active' : ''}>
        <BiBook />
      </Link>
      <Link to="/portfolio" onClick={() => setActiveNav('/services')} className={activeNav === '/services' ? 'active' : ''}>
        <GrProjects />
      </Link>
      <Link to="/contact" onClick={() => setActiveNav('/portfolio')} className={activeNav === '/portfolio' ? 'active' : ''}>
        <BiMessageSquareDetail />
      </Link>
    </nav>
  );
}

export default Nav;
