import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Modal } from 'react-bootstrap';

const CertificatTravail = ({ show, setShow }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <Modal show={show} fullscreen onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <button
              onClick={handlePrint}
              className='btn btn-print bg-gray-300 text-black-800 font-bold py-1 px-2  rounded inline-flex items-center'
            >
              <span>Imprimer</span>
            </button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <main ref={componentRef} className='m-5 p-5 md-:max-w-md lg:mw-auto'>
            <div>
              <h2 className='font-bold uppercase tracking-wide text-4xl mb-3'>
                OVATOD
              </h2>
              <p>
                12 Rue de Caulaincourt <br />
                75018 PARIS == :Code_postale & :ville
              </p>
              <p>
                Siret: :code_siret <br />
                Code Naf: :code_ape
              </p>
            </div>
            {/*Your détails*/}
            <br />
            <br />
            <br />
            <br />

            <section className='my-5'>
              <h2 className='text-center'>Certificat de travail</h2>
              <p>
                Je soussignée, [:Nom] [:prenom] <br />
                Agissant en qualité de Gérant
              </p>

              <p>
                Certifie l'employé [:Mme]/[:Mr] [:NOM][:Prénom]
                <br />
                N° sércurité sociale: [:numero_secu]
              </p>
              <p>
                Demaurant [:adresse]
                <br />
                [:Code_postale]
              </p>
              <p>
                En qualité de [:poste]
                <br />
                <span style={{ paddingLeft: '2.6rem' }}>Niveau: [:niveau]</span>
                <br />
                <span style={{ paddingLeft: '2.6rem' }}>
                  Echelon: [:echelon]
                </span>
              </p>
              <p>
                Depuis le [:date d'embauche] et aucune demande de préavis n'a
                été émise à ce jour.
              </p>
              <p>
                Signature précédée du nom et la qualité du signataire: <br />{' '}
                [:Nom] [:prénom] <br /> [:intitulé_poste]
              </p>
            </section>
            <section>
              <p>Fait à [:code_postal] le [:date_du_jour]</p>
            </section>
            <footer>signature</footer>
          </main>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CertificatTravail;
