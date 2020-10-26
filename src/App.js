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
    title: 'All-day event',
    start: todayStr
  },
  {
    //id: createEventId(),
    title: 'All-day event',
    start: todayStr
  },
  {
    //id: createEventId(),
    title: 'All-day event',
    start: todayStr
  },
  {
    //id: createEventId(),
    title: 'All-day event',
    start: todayStr
  },
  {
    //id: createEventId(),
    title: 'All-day event',
    start: todayStr
  },
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

  // TODO: Modify to highlight resident and detail differently
  function renderEventContent(eventInfo) {
    return (
      <div className="hidden-overflow">
        <i>{eventInfo.event.title}</i>
        <> </>
        <b>{eventInfo.event.extendedProps.residentName}</b>
      </div>
    )
  }

  return (
    <Container fluid>
      <Row>
        <Col md="0.5">
          Nav Bar
        </Col>
        <Col>
          <FullCalendar
            plugins={[ dayGridPlugin ]}
            //initialView="dayGridMonth"
            events={events}
            dayMaxEvents
            eventContent={renderEventContent}
            hiddenDays={[6]} // Omit Saturday
            validRange={{start: "2020-08-05", end: "2020-12-31"}} // TODO: Determine start and end of semester "For non-admins"
          />
          <CSVUploader setEvents={setEvents}/>
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
