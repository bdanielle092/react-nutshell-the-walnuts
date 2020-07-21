import {Route,} from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import MessageList from "./messages/MessageList";
import MessageEditForm from "./messages/MessageEditForm";
import MessageForm from "./messages/MessageForm";
import NewsList from "./news/NewsList";
import NewsDetail from "./news/NewsDetail";
import NewsForm from './news/NewsForm';
import NewsEditForm from './news/NewsEditForm';
import EventList from "./events/EventList";
import EventDetail from "./events/EventDetail";
import EventForm from "./events/EventForm";
import EventEditForm from "./events/EventEditForm";
import TaskList from "./tasks/TaskList";
import FriendCard from "./friends/FriendCard";


const ApplicationViews = () => {
    return (
        <React.Fragment>
            <Route exact
             path="/"
             render= {props => {
             return <Home />
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
            <Route exact path="/news"
            render={(props) => {
            return <NewsList {...props} />;
             }} />
             <Route path="/news/new" 
             render={(props) => {
                return <NewsForm {...props} />
             }} />
             <Route path="/news/:newsId(\d+)" 
             render={(props) => {
                 return <NewsDetail 
                 newsId={parseInt(props.match.params.newsId)} 
                 {...props} />;
             }} />
              <Route exact path="/newss/:news(\d+)/edit" 
              render={(props) => {
                return <NewsEditForm {...props} />
            }}/>
            



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