import React, { useEffect, useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Image } from 'react-bootstrap';

const LoginScreen = () => {
  //eslint-disable-next-line
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const myStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/bg-form.png'})`,
    height: '100vh',
    fontSize: '50px',
    marginTop: '-50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div
      className='container-form'
      style={
        ({
          border: '1px solid red',
          minHeight: '98vh',
        },
        myStyle)
      }
    >
      {' '}
      <div className='section'>
        <div className='form-section'>
          <h2 className='sub-title'>CONNECTEZ-VOUS...</h2>
          <form action=''>
            <div class='form-group'>
              <input
                type='email'
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class='form-group'>
              <input
                type='password'
                className='form-control'
                id='exampleInputPass'
                aria-describedby='passwordHelp'
                placeholder='Mot-de-passe'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type='submit' class='btn'>
              Connexion
            </button>
          </form>
        </div>
        <div className='accueil'>
          <p
            style={{
              fontSize: '1rem',
              color: 'black',
              fontFamily: 'sans-serif',
            }}
          >
            <LinkContainer to='/register'>
              <Nav.Link> Pas inscrit ? Enregistrez-vous</Nav.Link>
            </LinkContainer>
          </p>
          <h1>BUROTOP</h1>
          <img src='./images/accueil-img.png' alt='' />
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
