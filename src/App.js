import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap'
import DetailCalendar from './Components/DetailCalendar.js'
import SwapList from './Components/SwapList.js'


function App() {

  return (
    <Container fluid>
      <Row>
        <Col md="0.5">
          Nav Bar
        </Col>
        <Col>
          <DetailCalendar/>
        </Col>
        <Col md="2">
          <SwapList></SwapList>
        </Col>
        <Col md="1">
          Filters
        </Col>
      </Row>
    </Container>
  );
}

export default App;
