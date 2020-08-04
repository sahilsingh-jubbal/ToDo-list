import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Whether from './Whether';
import Tracker3 from './Tracker3';
import Tracker_District from './Tracker_District';
import Todo_list3 from './Todo_list3';
import Navbar2 from './Navbar2';
import AlertOne from './AlertOne';

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
            
        </switch>
    </>);
}
export default ToCall;