import {Route,} from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import NewsList from "./news/NewsList";
import NewsDetail from "./news/NewsDetail";
import EventCard from "./events/EventCard";
import MessageCard from "./messages/MessageCard";
import FriendCard from "./friends/FriendCard";
import Login from "./login/Login"
import TaskCard from "./tasks/TaskCard"
import TaskList from "./tasks/TaskList";
import TaskForm from "./tasks/TaskForm"
import TaskEditForm from "./tasks/TaskEditForm"


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
            <Route exact 
            path="/news"
            render={props => {
            return <NewsList />;
             }}
             />
             <Route
             path="/news/:newsId(\d+)" 
             render={(props) => {
                 return <NewsDetail 
                 newsId={parseInt(props.match.params.newsId)} 
                 {...props} />;
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

            {/* Tasks */}

            <Route path="/tasks/:taskId(\d+)/edit" render={props => {
                return <TaskEditForm {...props} />
            }} />
            
            <Route path="/tasks/new" render={(props) => {
                return <TaskForm {...props} />
            }} />

            <Route exact path="/tasks" render={props => {
                return <TaskList {...props} />
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

export default ApplicationViews;