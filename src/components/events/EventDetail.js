import React, {useState, useEffect} from 'react';
import EventManager from "../../modules/EventsManager";
// import './EventDetail.css'

const EventDetail = props => {
    const [event, setEvent] = useState({ event:"", date: "", location: "", description: ""});
    

    useEffect(() => {
        EventManager.get(props.eventId)
        .then(event => {
            setEvent ({
                event: event.event,
                date: event.date,
                location: event.location,
                description: event.description
            });
           
        });
    }, [props.eventId]);

    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={require('./event.png')} alt="event logo" />
                </picture>
                <h3>Event: <span style={{ color: 'darkslategrey' }}>{event.event}</span></h3>
                <p>Date: {event.date}</p>
                <p>Location: {event.location}</p>
                <p>Description: {event.description}</p>
            </div>
        </div>
    );
}

export default EventDetail