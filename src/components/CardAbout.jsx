import React from 'react';

import CardAboutStyled from '../styles/CardAbout.styled';

const CardAbout = ({ children, flip, name }) => {
  return (
    <CardAboutStyled flip={flip} name={name}>
      {children}
    </CardAboutStyled>
  );
};

export default CardAbout;
