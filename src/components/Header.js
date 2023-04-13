import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #ce2829;
  padding: 1rem;
  display: flex;
  justify-content: center; 
  align-items: center;
  height: 120px; 
`;

const Title = styled.h1`
  color: white;
  margin: 0;
  
`;


const Header = () => {
  return (
    <StyledHeader>
      <Title>Tek Pizza</Title>
    </StyledHeader>
  );
};

export default Header;
