import React from "react"
import "./Message.css"

const MessageCard = props => {
   
    return (
        <div className="card">
            <div className="card-content">
                <h3>
    Message: <span className="card-messageName">{props.message.message}</span>
                </h3>
                <button type="button"
                 onClick={() => props.history.push(`/messages/${props.message.id}/edit`)}>
                Edit Message
                </button>
            
            </div>
        </div>
    )
}
export default MessageCard