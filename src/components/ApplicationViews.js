import {Route,} from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import NewsCard from "./news/NewsCard";
import EventCard from "./events/EventCard";
import MessageCard from "./messages/MessageCard";
import TaskCard from "./tasks/TaskCard";
import FriendCard from "./friends/FriendCard";
import Login from "./login/Login"

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