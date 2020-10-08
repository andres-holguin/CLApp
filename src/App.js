import React from 'react';
import './App.css';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Container, Row, Col } from 'react-bootstrap'
import SwapList from './Components/SwapList.js'

let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

let events = [
  {
    //id: createEventId(),
    title: 'All-day event',
    start: todayStr
  },
  {
    //id: createEventId(),
    title: 'Timed event',
    start: new Date()
  }
]

function App() {

  return (
    <Container fluid>
      <Row>
        <Col md="0.5">
          NavBar
        </Col>
        <Col>
          <div className="App">
          <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          initialEvents={events}
          />
          </div>
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
