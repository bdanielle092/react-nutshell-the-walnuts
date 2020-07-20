import {Route,} from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import NewsCard from "./news/NewsCard";
import EventCard from "./events/EventCard";
import MessageCard from "./messages/MessageCard";
import FriendCard from "./friends/FriendCard";
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
            <Route
             path="/events"
            render={props => {
            return <EventCard />;
            }}
            />
            <Route
            path="/messages"
            render={props => {
            return <MessageCard />;
             }}
            />
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