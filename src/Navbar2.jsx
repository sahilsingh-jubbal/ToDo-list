import React from 'react';
import { NavLink } from 'react-router-dom';
import './todo.css';
function Navbar2() {
    return (<>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/">Whether App</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" exact activeClassName='activeOne' to="/">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact activeClassName='activeOne' to="/tracker_district">Covid-19 Tracker</NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink className="nav-link" exact activeClassName='activeOne' to="/tracker">Covid-19 Statewise <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact activeClassName='activeOne' to="/todo_list">ToDo list</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" exact activeClassName='activeOne' to="/units">Unit Converter</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" exact activeClassName='activeOne' to="/news">Latest News</NavLink>
                    </li>

                </ul>

            </div>
        </nav>
    </>);
}
export default Navbar2;