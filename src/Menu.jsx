// import React from 'react';
// import {NavLink} from 'react-router-dom';
// import './index.css';


// function Menu(){
//     return(
//     <>
//     <div className='navStyle'>
//         <NavLink exact className='more' id='first' activeClassName='active_to' to='/'>AboutUs </NavLink>
//         <NavLink exact className='more' activeClassName='active_to' to='/contact'>ContactUs</NavLink>
//     </div>
//     <br/>
//         <a href='/'>About</a>
//         <a href='/contact'>Contact</a>
        
//     </>
//     );

// }
// export default Menu;


// UseParms and navlink
import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
function Menu(){
    return(<>
        <div className='navStyle'>
            <NavLink to='/' exact className='my' id='first' activeClassName='active_to'>AboutUs</NavLink>
            <NavLink to='/contact' className='my' activeClassName='active_to'>ContactUs</NavLink>
            <NavLink to='/search' className='my' activeClassName='active_to'>Search</NavLink>
            <NavLink to='/user/sahilsingh/jubbal' className='my' activeClassName='active_to'>Users</NavLink>
            <NavLink to='/services' className='my' activeClassName='active_to'>Services</NavLink>
       </div>
           
        <br/>
        {/* <a href='/' >AboutUs</a>
        <a href='/contact' >ContactUs</a> */}
        
    </>);
}
export default Menu;