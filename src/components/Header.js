import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Image } from 'react-bootstrap';

const Header = () => {
  return (
    <header className='Header'>
      <LinkContainer to='/'>
        <Image src='../images/logo-512x512.png' />
        {/* <img src='./images/logo-512x512.png' alt='' /> */}
      </LinkContainer>
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ms-auto'>
          {/* <LinkContainer to='/cart'> */}
          {/* <Nav.Link> */}
          {/* <i */}
          {/* className='fas fa-shopping-cart' */}
          {/* style={{ border: 'red 1px solid' }} */}
          {/* > */}
          {/* ouesh ? */}
          {/* </i> */}
          {/* </Nav.Link> */}
          {/* </LinkContainer> */}
          {/* <LinkContainer to='/register'> */}
          {/* <Nav.Link>Inscrivez-vous ?</Nav.Link> */}
          {/* </LinkContainer> */}
        </Nav>
      </Navbar.Collapse>
    </header>
  );
};

export default Header;
