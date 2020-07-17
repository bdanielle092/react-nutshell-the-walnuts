import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <header>
          <h1 className="site-title"> Nutshell</h1>
             <nav>
            <ul className="container">
              <li>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/news">
                 Share News
                </Link>
              </li>
              <li>
              <Link className="nav-link" to="/events">
                 Events
                </Link>
                </li>
              <li>
              <Link className="nav-link" to="/messages">
                  Chat
                </Link>
              </li>
              <li>
              <Link className="nav-link" to="/tasks">
                Task
                </Link>
                </li>
              <li>
              <Link className="nav-link" to="/friends">
                Friends
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      );
}
export default NavBar