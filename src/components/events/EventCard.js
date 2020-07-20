import React from "react"
import { Link } from "react-router-dom";

const EventCard = props => {
   
    return (
        <div className="card">
            <div className="card-content">
            <picture>
          <img src={require("./event.png")} alt="My Dog" />
        </picture>
                <h3>
    Event: <span className="card-eventName">{props.event.event}</span>
                </h3>
                <Link to={`/events/${props.event.id}`}>
                    <button>More Info</button>
                </Link>
                
                <button type="button" onClick={ () => props.deleteEvent(props.event.id)}>Delete</button>
            </div>
        </div>
    )
}
export default EventCard