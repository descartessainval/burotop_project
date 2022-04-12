import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listEmployes } from '../actions/employeActions';
import Tabs from '../components/Tabs';
import FormModal from '../components/FormModal';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Message from '../components/Message';
import Loader from '../components/Loader';
import {
  // InputGroup,
  // Form,
  FormControl,
  Row,
  Col,
  Container,
  Button,
} from 'react-bootstrap';
import Employe from '../components/Employes';

// library.add(faSearch);

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
          {/* <button className='btn-1'>+ Ajouter un employé</button> */}
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
              // <h1>Loading...</h1>
              <Loader />
            ) : error ? (
              // <h3>{error}</h3>
              <Message variant='danger'>{error}</Message>
            ) : (
              <>
                {employes.map((employe) => (
                  <Col
                    key={employe.id}
                    // sm={12} md={6} lg={4} xl={3}
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
