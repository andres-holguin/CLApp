import React, { useEffect, useState } from 'react';
import './App.css';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Container, Row, Col } from 'react-bootstrap'
import SwapList from './Components/SwapList.js'
import CSVUploader from './Components/CSVUploader';

let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

let initEvents = [
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
  const [events, setEvents] = useState(null);
  useEffect(fetchEvents,[]);

  function fetchEvents() {
    console.log("Would fetch events here!");
    setEvents(initEvents);
  }

  return (
    <Container fluid>
      <Row>
        <Col md="0.5">
          <CSVUploader setEvents={setEvents}/>
        </Col>
        <Col>
          <div className="App">
          <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          events={events}
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
