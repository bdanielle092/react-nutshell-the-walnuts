import React from "react"
import { Link } from "react-router-dom";
import "./Event.css"

const EventCard = props => {
   
    return (
        <div className="card">
            <div className="card-content">
            <picture>
          <img src={require("./event.png")} alt="event logo" />
        </picture>
                <h3>
    Event: <span className="card-eventName">{props.event.event}</span>
                </h3>
                <Link to={`/events/${props.event.id}`}>
                    <button>More Info</button>
                </Link>
                <button type="button"
                 onClick={() => props.history.push(`/events/${props.event.id}/edit`)}>
                Edit Event
                </button>
                
                <button type="button" onClick={ () => props.deleteEvent(props.event.id)}>Delete</button>
            </div>
        </div>
    )
}
export default EventCard