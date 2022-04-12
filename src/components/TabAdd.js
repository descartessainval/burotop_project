import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const TabAdd = ({ handleClose }) => {
  const [nom, setNom] = useState();
  const [prenom, setPrenom] = useState();
  const [email, setEmail] = useState();
  const [telephone, setTelelephone] = useState();
  const [etablissement, setEtablissement] = useState();
  const [type_contrat, setTypeContrat] = useState();
  const [mesure_temps, setMesureTemps] = useState();
  const [volume_horaire, setVolumeHoraire] = useState();

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className='container'>
      <div className='bloc-tabs'>
        <button
          className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(1)}
        >
          Profil
        </button>
        <button className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}>
          Informations contractuelles
        </button>
      </div>
      <div className='content-tabs'>
        <div
          className={toggleState === 1 ? 'content  active-content' : 'content'}
        >
          <h6 style={{ fontWeight: 'bold' }}>Profil</h6>
          <fieldset style={{ display: 'flex' }}>
            <input
              type='text'
              value={prenom}
              name={prenom}
              placeholder='Prénom'
              onChange={(e) => setPrenom(e.target.value)}
            />
            <input
              type='text'
              value={nom}
              name={nom}
              placeholder='Nom'
              onChange={(e) => setNom(e.target.value)}
            />
          </fieldset>
          <fieldset style={{ display: 'flex' }}>
            <input
              type='text'
              value={email}
              name={email}
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='tel'
              value={telephone}
              name={telephone}
              placeholder='Téléphone'
            />
          </fieldset>

          <Modal.Footer>
            <Button variant='secondary' size='sm' onClick={handleClose}>
              Annuler
            </Button>
            <Button
              variant='primary'
              onClick={() => toggleTab(2)}
              disabled={!nom || !prenom || !email}
              size='sm'
            >
              Suivant
            </Button>
          </Modal.Footer>
        </div>
        <div
          className={toggleState === 2 ? 'content  active-content' : 'content'}
        >
          <h6 style={{ fontWeight: 'bold' }}>Informations contractuelles</h6>
          <fieldset style={{ display: 'flex' }}>
            <input
              type='text'
              value={etablissement}
              name={etablissement}
              placeholder='Etablissement'
              onChange={(e) => setEtablissement(e.target.value)}
            />
            <input
              type='text'
              value={type_contrat}
              name={type_contrat}
              placeholder='Type de contrat'
              onChange={(e) => setTypeContrat(e.target.value)}
            />
          </fieldset>
          <fieldset style={{ display: 'flex' }}>
            <input
              type='text'
              value={mesure_temps}
              name={mesure_temps}
              placeholder='Mesure du temps'
              onChange={(e) => setMesureTemps(e.target.value)}
            />
            <input
              type='number'
              value={volume_horaire}
              name={volume_horaire}
              placeholder='volume_horaire'
              onChange={(e) => setVolumeHoraire(e.target.value)}
            />
          </fieldset>
          <Modal.Footer>
            <Button variant='secondary' size='sm' onClick={handleClose}>
              Annuler
            </Button>
            <Button
              variant='primary'
              size='sm'
              onClick={handleClose}
              disabled={
                !etablissement ||
                !type_contrat ||
                !mesure_temps ||
                !volume_horaire
              }
            >
              Save
            </Button>
          </Modal.Footer>
        </div>
      </div>
    </div>
  );
};

export default TabAdd;
