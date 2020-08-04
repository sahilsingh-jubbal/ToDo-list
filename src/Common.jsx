import React from 'react';
import Seafloor from './images/Seafloor.jpg';
import { NavLink } from 'react-router-dom';
import Footer2 from './Footer2';

function Common(props) {
    return (<>
        <div className='container mb-3'>
            <div className='row mt-5' id='common1'>
                <div className='col-lg-6 mt-5'  >
                    <br /><br /><br /><br />
                    <h1 className='mt-5' id='home'> {props.name} <span style={{ color: 'rgb(5, 128, 145)' }}>CodeWithSahil</span></h1>
                    <p id='paraone'>{props.para}</p>

                    <NavLink to={props.visit} className='btn btn-outline-info' id='btn1'>{props.btname}</NavLink>
                </div>

                <div className='col-lg-6' id='img'>
                    <img src={props.img} alt='missing' className='img-fluid' id='img1' />
                </div>
            </div>
        </div>
    </>);

}
export default Common;