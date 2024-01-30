import React, { useEffect, useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav } from 'react-bootstrap';

const RegisterScreen = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

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
      <div className='section'>
        <div className='form-section-inscription'>
          <h2 className='sub-title2'>INSCRIVEZ-VOUS...</h2>
          <form action='' className='form-register'>
            <div class='form-group-flex' style={{}}>
              <input
                type='text'
                className='form-control input-register'
                id='nom'
                aria-describedby='nomHelp'
                placeholder='Nom'
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
              {''}
              <input
                type='text'
                className='form-control input-register'
                id='prenom'
                aria-describedby='nomHelp'
                placeholder='Prénom'
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
              />
            </div>
            <div class='form-group'>
              <input
                type='text'
                className='form-control'
                id='email'
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
            <div class='form-group'>
              <input
                type='password'
                className='form-control'
                id='exampleInputPass'
                aria-describedby='passwordHelp'
                placeholder='Confirmation du mot-de-passe'
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
              />
            </div>
            <button type='submit' class='btn'>
              S'enregistrer
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
            <LinkContainer to='/login'>
              <Nav.Link> Déjà inscrit ? Connectez-vous</Nav.Link>
            </LinkContainer>
          </p>

          <h1>BUROTOP</h1>
          <img src='./images/accueil-img.png' alt='' />
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
