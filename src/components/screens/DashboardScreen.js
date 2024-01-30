import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listEmployes } from '../../actions/employeActions';
import Tabs from '../Tabs';
import FormModal from '../FormModal';
import Message from '../Message';
import Loader from '../Loader';
import {
  FormControl,
  Row,
  Col,
  Container,
  Button,
} from 'react-bootstrap';
import Employe from '../Employes';

const DashboardScreen = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const employeList = useSelector((state) => state.employeList);
  const { loading, error, employes } = employeList;
  console.log(employes);

  useEffect(() => {
    dispatch(listEmployes());
  }, [dispatch]);

  return (
    <section className='Dashboard'>
      <div className='nav-btn'>
        <p>[:Nom ] [:Prénom] Employé</p>

        <div>
          <Button className='button_add' onClick={handleShow}>
            + Ajouter un employé
          </Button>
          <FormModal show={show} handleClose={handleClose} animation={false} />
        </div>
      </div>
      <Container className='dashboard-content'>
        <Row className='Row-dashb'>
          <Col xs={2} style={{ border: '1px solid black' }}>
            <FormControl
              aria-label='Small'
              aria-describedby='inputGroup-sizing-sm'
              placeholder='Search...'
              style={{
                border: '1px solid black',
              }}
            />
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant='danger'>{error}</Message>
            ) : (
              <>
                {employes.map((employe) => (
                  <Col
                    key={employe.id}
                  >
                    <Employe />
                  </Col>
                ))}
                ;
              </>
            )}
          </Col>
          <Col xs={9}>
            <Tabs />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DashboardScreen;
