import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import CertificatTravail from './documentsToPrint/CertificatTravail';

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  //for display fullscreen
  const values = [true, 'xxl-down'];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);

    setShow(true);
  }

  return (
    <div className='container'>
      <div className='bloc-tabs'>
        <button
          className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(1)}
        >
          Informations personnelles
        </button>
        <button
          className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(2)}
        >
          Données contractuelles & salariales
        </button>
        <button
          className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(3)}
        >
          Dossier RH
        </button>
        <button
          className={toggleState === 4 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(4)}
        >
          Documents
        </button>
      </div>
      <div className='content-tabs'>
        <div
          className={toggleState === 1 ? 'content  active-content' : 'content'}
        >
          <h3>Informations personnelles</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p>
        </div>
        <div
          className={toggleState === 2 ? 'content  active-content' : 'content'}
        >
          <h3>Données contractuelles & salariales</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>
        <div
          className={toggleState === 3 ? 'content  active-content' : 'content'}
        >
          <h3>Dossier RH</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
        <div
          className={toggleState === 4 ? 'content  active-content' : 'content'}
        >
          <h3>Documents</h3>
          <hr />
          <div
            style={{
              paddingTop: '1rem',
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            <Button className='me-2 mb-2' onClick={() => handleShow()}>
              Attestation de travail
            </Button>
            <CertificatTravail show={show} setShow={setShow} />
            <button
              type='button'
              style={{ borderRadius: '5px', padding: '1rem' }}
            >
              Autres documents tests
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
