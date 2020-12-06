import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import EventModal from './EventModal.js'
import CSVUploader from './CSVUploader.js';

let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

let id = 0;
// TODO: Move outside component and include as prop
let initEvents = [
  {
    id: id++,
    title: "COM-REC",
    start: "2020-12-28",
    extendedProps: {
      residentName: "Andres",
      comments: []
    }
  },
  {
    id: id++,
    title: "COM-NHAL",
    start: "2020-12-25",
    extendedProps: {
      residentName: "Derek",
      comments: ["Done", "Good Work", "Thanks"],
    }
  },
  {
    id: id++,
    title: 'All-day event',
    start: todayStr
  },
  {
    id: id++,
    title: 'All-day event',
    start: todayStr
  },
  {
    id: id++,
    title: 'All-day event',
    start: todayStr
  },
  {
    id: id++,
    title: 'All-day event',
    start: todayStr
  },
  {
    id: id++,
    title: 'All-day event',
    start: todayStr
  },
  {
    id: id++,
    title: 'Timed event',
    start: new Date()
  }
]

export default function DetailCalendar(props) {
  const [events, setEvents] = useState(null); // TODO: Use as prop
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  useEffect(fetchEvents,[]);

  function fetchEvents() {
    console.log("Would fetch events here!");
    setEvents(initEvents);
  }

  function renderEventContent(eventInfo) {
    return (
      <div className="hidden-overflow">
        <i>{eventInfo.event.title}</i>
        <> </>
        <b>{eventInfo.event.extendedProps.residentName}</b>
      </div>
    )
  }

  function handleEventClick(eventClickInfo) {
    setShowModal(true);
    setSelectedEvent(eventClickInfo.event);
    console.log("Event was clicked: ", eventClickInfo.event)
  }

  function handleModalClose() {
    setShowModal(false);
  }

  }

  return (
    <>
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        events={events}
        eventClick={handleEventClick}
        dayMaxEvents
        eventContent={renderEventContent}
        hiddenDays={[6]} // Omit Saturday
        validRange={{start: "2020-08-05", end: "2020-12-31"}} // TODO: Determine start and end of semester "For non-admins"
      />
      <EventModal event={selectedEvent} show={showModal} onHide={handleModalClose}/>
      <CSVUploader setEvents={setEvents}/>
    </>
  )
}