import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap'
import DetailCalendar from './Components/DetailCalendar.js'


function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <DetailCalendar/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
