import {Route,} from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import MessageList from "./messages/MessageList";
import MessageEditForm from "./messages/MessageEditForm";
import MessageForm from "./messages/MessageForm";
import NewsList from "./news/NewsList";
import NewsDetail from "./news/NewsDetail";
import EventList from "./events/EventList";
import EventDetail from "./events/EventDetail";
import EventForm from "./events/EventForm";
import EventEditForm from "./events/EventEditForm";
import Login from "./login/Login"
import TaskCard from "./tasks/TaskCard"
import TaskList from "./tasks/TaskList";
import TaskForm from "./tasks/TaskForm"
import TaskEditForm from "./tasks/TaskEditForm"
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
             {/* <Route 
             path="/login" 
             render={props => {
            return <Login {...props} />
            }} /> */}
         
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
           <Route exact path="/events/:eventId(\d+)/edit" render={(props) => {
               return <EventEditForm {...props} />
           }}/>
              {/* Message */}
             
           <Route exact path="/messages" render={props => {
                return <MessageList {...props}/>
            }} />
             <Route exact path="/messages/new" render={(props) => {
                return <MessageForm {...props} />
            }} />
            <Route exact path="/messages/:messageId(\d+)/edit" render={(props) => {
               return <MessageEditForm {...props} />
           }}/>
           
           {/* News */}
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