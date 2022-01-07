import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {

    const navStyle = {
        color: 'black'
    };

    const navStyle2 = {
        color: 'blue'
    };

  return (
    <nav className='navi'>
      <h2>CourDevelops</h2>
      <ul className='nav-links'>
        <Link style={navStyle} to="/About">About</Link>
        <Link style={navStyle} to="/More">More</Link>
        <Link style={navStyle2} to="/EvenMore">Even More</Link>
      </ul>
    </nav>
  );
}
