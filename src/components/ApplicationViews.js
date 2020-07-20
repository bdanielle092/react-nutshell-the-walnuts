import {Route} from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import NewsList from "./news/NewsList";
import NewsDetail from "./news/NewsDetail";
import EventCard from "./events/EventCard";
import MessageCard from "./messages/MessageCard";
import TaskCard from "./tasks/TaskCard";
import FriendCard from "./friends/FriendCard";

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
            return <NewsList />;
             }}
             />
             <Route
             path="/news/:newsId(\d+)" render={(props) => {
                 return <NewsDetail newsId={parseInt(props.match.params.newsId)} />
             }} />
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

export default ApplicationViews;