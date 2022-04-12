import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Employes = ({ employe }) => {
  return (
    <>
      <ListGroup>
        <ListGroup.Item>
          <strong>{employe.libelle}</strong>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default Employes;
