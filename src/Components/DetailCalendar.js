import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import CSVUploader from './CSVUploader.js';

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

export default function DetailCalendar(props) {
  const [events, setEvents] = useState(null);
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

  return (
    <>
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
    </>
  )
}