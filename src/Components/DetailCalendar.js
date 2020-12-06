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

function fetchDBEvents() {
  console.log("Would fetch events here!"); // TODO: Fetch from DB
  return JSON.parse(JSON.stringify(initEvents));
}

function updateEvent(newEvent) {
  // eslint-disable-next-line
  let eventToModIndex = initEvents.findIndex(event => event.id == newEvent.id);
  initEvents[eventToModIndex] = newEvent;
}

export default function DetailCalendar(props) {
  // States
  const [events, setEvents] = useState(null); // TODO: Use as prop
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  // Effects
  /* Fetch events when first mounted */
  useEffect(fetchEvents,[]);
  /* Update the selected event shown in the modal when events changes */
  useEffect(() => {
  // eslint-disable-next-line
    selectedEvent && setSelectedEvent(events.find(event => event.id == selectedEvent.id));
  // eslint-disable-next-line
  },[events]);

  // Utility Functions
  function fetchEvents() {
    setEvents(fetchDBEvents());
  }

  function renderEventContent(eventInfo) {
    return (
      <div role="button" className="hidden-overflow">
        <i>{eventInfo.event.title}</i>
        <> </>
        <b>{eventInfo.event.extendedProps.residentName}</b>
      </div>
    )
  }

  function handleEventClick(eventClickInfo) {
    setShowModal(true);
    setSelectedEvent(eventClickInfo.event);
  }

  function handleModalClose() {
    setShowModal(false);
    setSelectedEvent(null);
  }

  function handleUpdateEvent(newEvent) {
    updateEvent(newEvent);
    fetchEvents(); // Forces Calendar to reload with modified event
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
      <EventModal 
        event={selectedEvent} 
        show={showModal} 
        onHide={handleModalClose}
        onUpdateEvent={handleUpdateEvent}
      />
      <CSVUploader setEvents={setEvents}/>
    </>
  )
}