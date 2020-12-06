import React, { useState } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap'
import DetailCalendar from './Components/DetailCalendar.js'


function App() {
  const [log, setLog] = useState(["Hello", "World"])
  function handleEventChange(changeInfo) {
    setLog(log.concat(changeInfo.message))
  }

  return (
    <Container fluid>
      <Row>
        <Col>
          <DetailCalendar onEventChange={handleEventChange}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
