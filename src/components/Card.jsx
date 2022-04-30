import React from 'react';

import CardStyled from '../styles/Card.styled';

const Card = ({ children, flip, name }) => {
  return (
    <CardStyled flip={flip} name={name}>
      {children}
    </CardStyled>
  );
};

export default Card;
