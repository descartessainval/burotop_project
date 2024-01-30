import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Image } from 'react-bootstrap';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderStyled className='Header'>
      <LinkContainer to='/'>
        <Image src='../images/logo-512x512.png' />
      </LinkContainer>
      <Navbar.Collapse id='basic-navbar-nav'>
        <LinkContainer to='/login'>
          <Nav.Link className='ms-auto'> Connexion</Nav.Link>
        </LinkContainer>
      </Navbar.Collapse>
    </HeaderStyled>
  );
};
const HeaderStyled = styled.header`
background: yellow;
`
export default Header;
