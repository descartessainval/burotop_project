import React from 'react';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components'
import LoginForm from '../Login/LoginForm';
import { LinkContainer } from 'react-router-bootstrap';

const HomeScreen = () => {
  return (
    <HomeScreenStyled>
      <h2 className='title'> Bienvenue Sur la page d'accueil de BUROTOP</h2>
      <section className='connexion-home'>
        <article className='left'>
          <LoginForm />
        </article>
        <article className='right'>
          <LinkContainer to='/register'>
            <Nav.Link> Pas inscrit ? Enregistrez-vous</Nav.Link>
          </LinkContainer>
        </article>
      </section>
    </HomeScreenStyled>
  )
}

const HomeScreenStyled = styled.div`
height: 100vh;
width: 100%;
display: flex;
flex-direction:   column;
justify-content: center;

.title{
background: green;
text-align: center;
}

.connexion-home{
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: black solid 1px;

  .left, .right{
    padding: 2rem 0 0 10rem;
  }
  .left{
    background: yellowgreen;
  }
  .right{
    background: red;
  }
}



`

export default HomeScreen;
