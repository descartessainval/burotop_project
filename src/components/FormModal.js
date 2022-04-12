import React from 'react';
import { Modal, Button } from 'react-bootstrap';
//import Tabs from './Tabs';
import TabAdd from './TabAdd';

const FormModal = ({ show, handleClose, animation }) => {
  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Ajouter un employé</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <Tabs show={show} handleClose={handleClose} animation={animation} /> */}
        <TabAdd show={show} handleClose={handleClose} animation={animation} />
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
