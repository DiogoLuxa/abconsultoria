import React from 'react';

import SectionTwoColumnsStyled from '../styles/SectionTwoColumns.styled';

const SectionTwoColumns = ({ children, whoFirst }) => {
  return (
    <SectionTwoColumnsStyled whoFirst={whoFirst}>
      {children}
    </SectionTwoColumnsStyled>
  );
};

export default SectionTwoColumns;
