import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #f8e3dd;
  padding: 1rem;
  text-align: center;
`;

const Logo = styled.div`
  font-size: 2.5rem;
  color: #734338;
  margin-bottom: 1rem;
`;

const NavLinks = styled.div`
  a {
    color: #734338;
    text-decoration: none;
    margin: 0 1rem;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: #e6a4a4;
    }
  }
`;

function Navbar() {
  return (
    <Nav>
      <Logo>Sweet Delights</Logo>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;
