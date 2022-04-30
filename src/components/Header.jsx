import React from 'react';

import { Link } from 'react-router-dom';

import HeaderStyled from '../styles/Header.styled';

import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <HeaderStyled>
      <div className="custom-shape-divider-top-1650812547">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <div className="brand">
            <Link to="/" className="navbar-brand">
              <img src="./images/logo.jpg" alt="logo" />
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </div>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/sobre" className="nav-link">
                Sobre
              </Link>
              <Link to="/servicos" className="nav-link">
                Serviços
              </Link>
              <Link to="/contato" className="nav-link">
                Contato
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderStyled>
  );
};

export default Header;
