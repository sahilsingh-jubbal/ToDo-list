import React,{useState} from 'react';
import Arrow from './images/Arrow.png';
import India_flag from './images/India_flag.png';
import Maha2 from './images/Maha2.jpg';
import Telagna from './images/Telagna.png';
import Andra from './images/Andra.jpg';
import Uttar1 from './images/Uttar1.jpg';
import Nico from './images/Nico.jpg';
import Punjab from './images/Punjab.png';
import Rajasthan1 from './images/Rajasthan1.jpg';
import Graph1 from './images/Graph1.svg';
import Footer2 from './Footer2';


function Info(props) {

    if (props.state === 'Maharashtra') var img = Maha2;
    else if (props.state === 'Telangana') var img = Telagna;
    else if (props.state === 'Andhra Pradesh') var img = Andra;
    else if (props.state === 'Uttar Pradesh') var img = Uttar1;
    else if (props.state === 'Andaman and Nicobar Islands') var img = Nico;
    else if (props.state === 'Punjab') var img = Punjab;
    else if (props.state === 'Rajasthan') var img = Rajasthan1;
    else var img = India_flag;

    return (<>
        <div className='container  w-75' id='container_for_tracker'>
            <div className='row'>
                <div className='col-lg-6 col-12'>
                    {/* <h1>State: {props.state}</h1>
                    <h1>District: {props.district}</h1>
                    <h1>Active Cases: {props.active}</h1>
                    <h1>confirmed Cases: {props.confirmed}</h1>
                    <h1>Total Death: {props.deceased}</h1>
                    <h1>Total Recovered: {props.recovered}</h1> */}

                    <div className="card shadow w-75 ml-5" id='card_for_tracker'>
                        <img src={img} className="card-img-top img-fluid" style={{ width: 'auto', height: '200px' }} alt="..." />
                        <div className="card-body">
                            <h4>State: <b><span style={{ color: 'blue' }}>{props.state}</span></b></h4>
                            <h4>District: <b><span style={{ color: 'rgb(250, 10, 170)' }}>{props.district}</span></b></h4>
                            <h4>Active Cases: <b><span style={{ color: 'red' }}>{props.active}</span></b></h4>
                            <h4>Confirmed Cases: <b><span style={{ color: 'purple' }}>{props.confirmed}</span></b></h4>
                            <h4>Total Death: <b><span style={{ color: 'red' }}>{props.deceased}</span></b></h4>
                            <h4>Total Recovered: <b><span style={{ color: 'green' }}>{props.recovered}</span></b></h4>
                        </div>
                    </div>
                </div>

                <div className='col-lg-6 col-12'>
                    <img src={Graph1} className='img-fluid mt-5' id='img_for_rise' style={{ marginLeft: '80px', width: '500px', height: '500px' }} />
                </div>
            </div>
        </div>
        
        <Footer2/>
    </>);
}
export default Info;