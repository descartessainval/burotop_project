import { LinkContainer } from 'react-router-bootstrap';
import { Nav } from 'react-bootstrap';
import LoginForm from '../Login/LoginForm';

const LoginScreen = () => {


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
        <div className='form-section'>
          <h2 className='sub-title'>CONNECTEZ-VOUS...</h2>
          <LoginForm />
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
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
