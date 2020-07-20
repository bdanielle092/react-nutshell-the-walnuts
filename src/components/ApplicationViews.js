import {Route} from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import NewsCard from "./news/NewsCard";
import MessageCard from "./messages/MessageCard";
import TaskCard from "./tasks/TaskCard";
import FriendCard from "./friends/FriendCard";
import EventList from "./events/EventList";
import EventDetail from "./events/EventDetail";


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
           <Route path="/events/:eventId(\d+)" render={(props) => {
                return <EventDetail eventId={parseInt(props.match.params.eventId)}
                {...props} />
            }} />
           {/* <Route path="/events" render={(props) => {
                return <EventForm {...props} />
           }} /> */}
            <Route
            path="/messages"
            render={props => {
            return <MessageCard />;
             }}
            />
            <Route
             path="/tasks"
            render={props => {
            return <TaskCard />;
             }}
             />
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