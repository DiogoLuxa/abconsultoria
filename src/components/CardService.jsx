import React from 'react';

import CardServiceStyled from '../styles/CardService.styled';

const CardService = ({ children, dataAos, dataAosDelay }) => {
  return (
    <CardServiceStyled data-aos={dataAos} data-aos-delay={dataAosDelay}>
      {children}
    </CardServiceStyled>
  );
};

export default CardService;
