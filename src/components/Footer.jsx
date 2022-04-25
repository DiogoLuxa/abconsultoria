import React from 'react';

import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

import FooterStyled from '../styles/Footer.styled';

import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <div className="footer-navbar">
          <div className="footer-navbar-brand">
            <Link to="/">
              <h2>
                AB <span>Consultoria</span>
              </h2>
            </Link>
            <p>CNPJ: 12.345.678/0001-90</p>
          </div>
          <div className="footer-navbar-nav">
            <Link to="/sobre" className="nav-link">
              Sobre
            </Link>
            <Link to="/servicos" className="nav-link">
              Serviços
            </Link>
            <Link to="/contato" className="nav-link">
              Contato
            </Link>
          </div>
          <div className="footer-navbar-socials">
            <IconContext.Provider value={{ color: '#fff', size: '1.5rem' }}>
              <a
                href="https://www.instagram.com/a.b.consultoria/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/c/Empresariando"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.linkedin.com/company/ab-consultoria/about/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </IconContext.Provider>
          </div>
        </div>
        <div className="copyright">
          <p>
            Copyright © 2022{' '}
            <a href="https://www.linkedin.com/in/diogo-tadeu/">Diogo Luxa</a>.
            Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
