import React, { useState, useEffect} from 'react'
import MessageCard from "./MessageCard"
import MessageManager from "../../modules/MessagesManager"

const MessageList = (props) => {
    const [messages, setMessages] = useState([]);
    const getMessages = () => {
        return MessageManager.getAll().then(messagesFromAPI => {
          setMessages(messgaesFromAPI)
        });
    };


    useEffect(( )=> {
        getMessages()
    }, [])

     
    return (
        <>
        <section className="section-content">
            <button type="button"
            className="btn"
            onClick={() => {props.history.push("/messages/new")}}>
            Add Message
            </button>
        </section>
    <div className="container-cards"> 
       {messages.map(message => <MessageCard
       key={message.id}
       message={message}
       {...props} /> )}
    </div>
    </>
    );
};

export default MessageList