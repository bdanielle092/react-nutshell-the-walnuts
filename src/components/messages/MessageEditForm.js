import React, {useState, useEffect } from "react"
import MessageManager from "../../modules/MessagesManager"


const MessageEditForm = props => {
  const [message, setMessage] = useState({message: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = {...message};
    stateToChange[evt.target.id] = evt.target.value;
    setMessage(stateToChange)  
  };

  const UpdateExistingMessage = evt => {
    evt.preventDefault()
    setIsLoading(true);

    const editedMessage = {
      id: props.match.params.messageId,
      message: message.message,
    };
    MessageManager.update(editedMessage)
    .then(() => props.history.push("/messages"))
  }
  useEffect(() => {
    MessageManager.get(props.match.params.messageId)
    .then(message => {
      setMessage(message);
      setIsLoading(false);
    })
  }, [props.match.params.messageId])

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
              id="message"
              value={message.message}
              />
              <label htmlFor="message">Message</label>
            
              </div>
              <div className="alignRight">
                <button
                 type="button" disabled={isLoading}
                 onClick={UpdateExistingMessage}
                 className="btn btn-primary"
                 >Submit</button>
              </div>
        </fieldset>
      </form>
    </>
  )
}

export default MessageEditForm