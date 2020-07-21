import React, { useState, useEffect } from "react"
import EventManager from  "../../modules/EventsManager"
import "./EventForm.css"

const EventEditForm = props => {
  const [event, setEvent] = useState({ event: "", date: "", location: "", description: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...event };
    stateToChange[evt.target.id] = evt.target.value;
    setEvent(stateToChange);
  };

  const updateExistingEvent = evt => {
    evt.preventDefault()
    setIsLoading(true);

    
    const editedEvent = {
      id: props.match.params.eventId,
      event: event.event,
      date: event.date,
      location: event.location,
      description: event.description
    };

    EventManager.update(editedEvent)
      .then(() => props.history.push("/events"))
  }

  useEffect(() => {
    EventManager.get(props.match.params.eventId)
      .then(event => {
        setEvent(event);
        setIsLoading(false);
      });
  }, [props.match.params.eventId]);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="event"
              value={event.event}
            />
            <label htmlFor="event">Event</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="date"
              value={event.date}
            />
            <label htmlFor="date">Date</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="location"
              value={event.location}
            />
            <label htmlFor="location">Location</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="description"
              value={event.description}
            />
            <label htmlFor="description">Description</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingEvent}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default EventEditForm