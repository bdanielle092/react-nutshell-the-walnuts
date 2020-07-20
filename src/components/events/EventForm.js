import React, {useState} from 'react';
import EventManager from "../../modules/EventsManager";
import "./EventForm.css"

const EventForm = props => {
    const[event, setEvent] = useState({name: "", date: "", location: "", description: ""});
    const[isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = {...event};
        stateToChange[evt.target.id] = evt.target.value;
        setEvent(stateToChange);
    };
    const constructNewEvent = evt => {
        evt.preventDefault();
        if(event.event === "" || event.date === "" || event.location === ""|| event.description === "") {
           window.alert("Please fill out input fields");
    } else {
        setIsLoading(true);
        EventManager.post(event)
        .then(() => props.history.push("/events"));
    }
};
return (
    <>
        <form>
            <fieldset>
                <div className="formgrid">
                    < input
                     type="text"
                     required
                     onChange={handleFieldChange}
                     id="event"
                     placeholder="Event"
                     />
                     <label htmlFor="event">Event</label>
                     <input 
                      type="text"
                      required
                      onChange={handleFieldChange}
                      id="date"
                      placeholder="Date"
                      />
                      <label htmlFor="date">Date</label>
                      <input 
                      type="text"
                      required
                      onChange={handleFieldChange}
                      id="location"
                      placeholder="Location"
                      />
                      <label htmlFor="location">Location</label>
                      <input 
                      type="text"
                      required
                      onChange={handleFieldChange}
                      id="description"
                      placeholder="Description"
                      />
                      <label htmlFor="description">Description</label>
                    </div>
                    <div className="alignRight">
                        <button 
                        type="button"
                        disable={isLoading}
                        onClick={constructNewEvent}
                        >Submit</button>
                </div>
            </fieldset>
        </form>
    </>
)
}

export default EventForm
