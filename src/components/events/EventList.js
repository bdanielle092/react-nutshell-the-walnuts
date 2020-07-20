import React, { useState, useEffect} from 'react'
import EventCard from "./EventCard"
import EventManager from "../../modules/EventsManager"

const EventList = (props) => {
    const [events, setEvents] = useState([]);
    const getEvents = () => {
        return EventManager.getAll().then(eventsFromAPI => {
          setEvents(eventsFromAPI)
        });
    };
    // this is the delete
    const deleteEvent = id => {
        EventManager.delete(id)
    //  the .then refreash the page with all the events on it 
        .then(() => EventManager.getAll().then(setEvents))
    };

    useEffect(( )=> {
        getEvents()
    }, [])

     
    return (
        <>
        <section className="section-content">
            <button type="button"
            className="btn"
            onClick={() => {props.history.push("/events/new")}}>
            Add Event
            </button>
        </section>
    <div className="container-cards"> 
       {events.map(event => <EventCard
       key={event.id}
       event={event}
       deleteEvent={deleteEvent}
       {...props} /> )}
    </div>
    </>
    );
};

export default EventList