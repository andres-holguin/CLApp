import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import EventModal from './EventModal.js'
import CSVUploader from './CSVUploader.js';
import db from '../database.js';

export default function DetailCalendar(props) {
  // States
  const [events, setEvents] = useState(null); // TODO: Use as prop
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  // Effects
  /* Fetch events when first mounted/unmounted*/
  useEffect(() => {
    let eventsRef = db.ref('events/');
    let onValueChange = eventsRef.on('value', snapshot => setEvents(snapshot.val()));
    return () => eventsRef.off('value', onValueChange);
  },[]);
  /* Update the selected event shown in the modal when events changes */
  useEffect(() => {
  // eslint-disable-next-line
    selectedEvent && setSelectedEvent(events.find(event => event.id == selectedEvent.id));
  // eslint-disable-next-line
  },[events]);

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
    let key = newEvent.id;
    let eventRef = db.ref('events/' + key);
    eventRef.set(newEvent);
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