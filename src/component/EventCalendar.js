import React, {useEffect, useState} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import {database} from './fire'


function constructEvent(id, title, start) {
    return {
        id: id,
        title: title,
        start: start
    }
}


function EventCalendar() {

    const dateStr = new Date().toISOString().substr(0,10);

    const [events, setEvents] = useState([
        {
        id: 1,
        title: "KnightHacks",
        start: dateStr
        }
    ])

    useEffect(() => {
        console.log("Side effect has been triggered")
        let dbref = database.ref("details/")
        function onValueChange(snapshot) {
            const newArr = []
            var x = snapshot.val()
            for(var i in x) {
                let newEvent = constructEvent(x[i].id,x[i].title,x[i].start)
                newArr.push(newEvent)             
            }
            setEvents(events.concat(newArr));
        }
        dbref.on('value', onValueChange);
        return () => database.ref("details/").off('value', onValueChange)
    }, []);

    return(
        <div className = "calendar">
            <FullCalendar
                defaultView="dayGridMonth"
                theme={"darkly"}
                headerToolbar={{
                    left: "prev",
                    center: "title",
                    right: "next"
                  }}
                plugins={[  dayGridPlugin  ]}
                events={/*[{
                    id: 1,
                    title: "KnightHacks",
                    start: new Date().toISOString().substr(0,10)
                }]*/
                    events
                }
            />
        </div>
    )
}



export default EventCalendar;