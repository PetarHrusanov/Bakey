import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #734338;
  color: white;
  text-align: center;
  padding: 2rem;
  margin-top: 2rem;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>© 2025 Sweet Delights Bakery. All rights reserved.</p>
      <p>123 Baker Street | Tel: (555) 123-4567</p>
    </FooterContainer>
  );
}

export default Footer;
