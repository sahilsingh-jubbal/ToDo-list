import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import PeopleIcon from '@material-ui/icons/People';
function Navbar() {
    return (<>
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
                            <NavLink exact className="nav-link" activeClassName='active_class' to="/"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house-door-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z" />
                                <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                            </svg> Home <span className="sr-only">(current)</span></NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName='active_class' to="/about"><PeopleIcon/> AboutUs</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName='active_class' to="/contact"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M3.925 1.745a.636.636 0 0 0-.951-.059l-.97.97c-.453.453-.62 1.095-.421 1.658A16.47 16.47 0 0 0 5.49 10.51a16.471 16.471 0 0 0 6.196 3.907c.563.198 1.205.032 1.658-.421l.97-.97a.636.636 0 0 0-.06-.951l-2.162-1.682a.636.636 0 0 0-.544-.115l-2.052.513a1.636 1.636 0 0 1-1.554-.43L5.64 8.058a1.636 1.636 0 0 1-.43-1.554l.513-2.052a.636.636 0 0 0-.115-.544L3.925 1.745zM2.267.98a1.636 1.636 0 0 1 2.448.153l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z" />
                            </svg> Contact</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName='active_class' to="/search"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                            </svg> Search</NavLink>
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

                                <NavLink className="dropdown-item" to="/google_keep_app">Google kepp App</NavLink>

                                <NavLink className="dropdown-item" to="/covid-19_tracker">Covid-19 Tracker</NavLink>

                                <NavLink className="dropdown-item" to="/covid-19_another_tracker">Another Covid-19 Tracker</NavLink>

                                <NavLink className="dropdown-item" to="/assignment1">Order Menu</NavLink>


                            </div>
                        </li>
                    </ul>


                </div>
            </div>
        </nav>
    </>);
}
export default Navbar;