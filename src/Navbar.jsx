import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
function Navbar(){
    return(<>
        {/* <NavLink to='/'>Home</NavLink> */}

<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className='container'>
        <NavLink className="navbar-brand" to="/">CodeWithSahil</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            
            <li className="nav-item active">
                <NavLink exact className="nav-link" activeClassName='active_class' to="/">Home <span className="sr-only">(current)</span></NavLink>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link" activeClassName='active_class' to="/about">AboutUs</NavLink>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link" activeClassName='active_class' to="/contact">Contact</NavLink>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link" activeClassName='active_class' to="/search">Search</NavLink>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link" activeClassName='active_class' to="/services">Services</NavLink>
            </li>

        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            More
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <NavLink className="dropdown-item" to="/todo_list">ToDo list</NavLink>
            
            <NavLink className="dropdown-item" to="/">Google kepp App</NavLink>
            
            </div>
        </li>
    </ul>

       
        </div>
    </div>
</nav>
    </>);
}
export default Navbar;