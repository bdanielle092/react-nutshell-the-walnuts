import {Route,} from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import NewsCard from "./news/NewsCard";
import MessageList from "./messages/MessageCard";
import MessageForm from "./messages/MessageForm";
import MessageEditForm from "./messages/MessageEditForm";
import FriendCard from "./friends/FriendCard";
import EventList from "./events/EventList";
import EventDetail from "./events/EventDetail";
import EventForm from "./events/EventForm";
import EventEditForm from "./events/EventEditForm";
import Login from "./login/Login"
import TaskList from "./tasks/TaskList";


const ApplicationViews = () => {
    return (
        <React.Fragment>
            <Route
             exact
             path="/"
             render= {props => {
             return <Home />
             }}
             />
             {/* <Route 
             path="/login" 
             render={props => {
            return <Login {...props} />
            }} /> */}
            <Route
           path="/news"
            render={props => {
            return <NewsCard />;
             }}
             />
             {/* Event */}
             
            <Route exact path="/events" render={props => {
                return <EventList {...props}/>
            }} />
           <Route exact path="/events/:eventId(\d+)" render={(props) => {
                return <EventDetail eventId={parseInt(props.match.params.eventId)}
                {...props} />
            }} />
           <Route exact path="/events/new" render={(props) => {
                return <EventForm {...props} />
           }} />
           <Route path="events/:eventId(\d+)/edit" render={props => {
               return <EventEditForm {...props}/>
           }}/>
              {/* Message */}
           <Route exact path="/messages" render={props => {
                return <MessageList {...props}/>
            }} />
           
           <Route exact path="/messages/new" render={(props) => {
                return <MessageForm {...props} />
           }} />
           <Route path="messages/:messageId(\d+)/edit" render={props => {
               return <MessageEditForm {...props}/>
           }}/>
            <Route exact path="/tasks" render={props => {
                return <TaskList {...props}  />;
             }} />
             <Route
            path="/friends"
            render={props => {
            return <FriendCard />;
             }}
             />
        </React.Fragment>
    )
}

export default ApplicationViews