import React from 'react';

import ButtonStyled from '../styles/Button.styled';

const Button = () => {
  return (
    <ButtonStyled>
      <div className="btn-whats-container">
        <a
          href="https://wa.me/551121735533?text=Olá,%20eu%20tenho%20interesse%20em%20mais%20informações%20sobre%20a%20consultoria."
          target="_blank"
        >
          <i id="btn-whats" className="fa-brands fa-whatsapp"></i>
        </a>
      </div>
    </ButtonStyled>
  );
};

export default Button;
