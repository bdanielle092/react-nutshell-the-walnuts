import {Route,} from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import MessageList from "./messages/MessageList";
import MessageCard from "./messages/MessageCard";
import MessageForm from "./messages/MessageForm";
import NewsList from "./news/NewsList";
import NewsDetail from "./news/NewsDetail";
import EventCard from "./events/EventCard";
import EventList from "./events/EventList";
import EventDetail from "./events/EventDetail";
import EventForm from "./events/EventForm";
import EventEditForm from "./events/EventEditForm";
import Login from "./login/Login"
import TaskList from "./tasks/TaskList";
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
             <Route
             path="/events"
            render={props => {
            return <EventCard />;
            }}
            />
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
              <Route
            path="/messages"
            render={props => {
            return <MessageCard />;
             }}
            />
           <Route exact path="/messages" render={props => {
                return <MessageList {...props}/>
            }} />
             <Route path="/messages/new" render={(props) => {
                return <MessageForm {...props} />
            }} />
           
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
             {/* tasks */}
            <Route exact path="/tasks" render={props => {
                return <TaskList {...props}  />;
             }} />
             {/* friends */}
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