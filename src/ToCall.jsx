import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Whether from './Whether';
import Tracker3 from './Tracker3';
import Tracker_District from './Tracker_District';
import Todo_list3 from './Todo_list3';
import Navbar2 from './Navbar2';
import AlertOne from './AlertOne';
import News from './News';
function ToCall() {
    return (<>
        <Navbar2 />
        <switch>
            <Route exact path='/' component={Whether} />
            <Route path='/tracker' component={Tracker3} />
            <Route path='/tracker_district' component={Tracker_District} />
            <Route exact path='/todo_list' component={Todo_list3} />
            {/* <Route exact path='/units' component={Unit_converter} /> */}
            <Route exact path='/units' component={AlertOne} />
            <Route exact path='/news' component={News} />
            
        </switch>
    </>);
}
export default ToCall;

// http://newsapi.org/v2/everything?q=bitcoin&apiKey=API_KEY

//api key= 8cb8b7b73c764270a1a9232543192f36

// http://newsapi.org/v2/everything?q=nanded&apiKey=8cb8b7b73c764270a1a9232543192f36


// from sahilsinghjubbal2018@gmail.com another api key = 3bcfae5582414eeb8d6f4b18d8da3344