import React, { useState } from 'react';
import './alertOne.css';
import Length_part from './Length_part';
import Time_part from './Time_part';
import Temp_part from './Temp_part';
import Mass_part from './Mass_part';
import Volume_part from './Volume_part';
import Area_part from './Area_part';
import Frequency_part from './Frequency_part';
import Speed_part from './Speed_part';
import Presure_part from './Presure_part';
import Voltage_part from './Voltage_part';
import Current_part from './Current_part';
import Power_part from './Power_part';
import Energy_part from './Energy_part';
import Angle_part from './Angle_part';
import { CategoryData } from './Sdata_units';

function AlertOne() {

    var [units, SetUnits] = useState({
        Length: true,
        Area: false,
        Energy: false,
        Frequency: false,
        Mass: false,
        Presure: false,
        Speed: false,
        Tempreture: false,
        Time: false,
        Volume: false,
        Angle: false,
        Voltage: false,
        Current: false,
        Power: false,

    });

    function ChangeUnit(eve) {
        console.log(eve.target.value);
        var name = eve.target.value;
        SetUnits((prev) => {
            return {
                Length: false,
                Area: false,
                Energy: false,
                Frequency: false,
                Mass: false,
                Presure: false,
                Speed: false,
                Tempreture: false,
                Time: false,
                Volume: false,
                Angle: false,
                Voltage: false,
                Current: false,
                Power: false,
                [name]: true
            }

        });
        console.log(units);
    }

    return (<>
        <div className='full'>
            <div className="w-50 h-50 rounded shadow" id='border_div' style={{ border: '2px solid white' }}>
                <h1 className='pt-2 text-capitalize text-center'>Unit Converter</h1>
                <center>
                    <select className="form-control mx-2 w-75 my-5" onChange={ChangeUnit} id='main_select'>
                        {
                            CategoryData.map((val, index) => {
                                return <option>{val.name}</option>
                            })
                        }
                    </select>
                </center>
                {units.Length ? <Length_part /> : null}
                {units.Time ? <Time_part /> : null}
                {units.Tempreture ? <Temp_part /> : null}
                {units.Mass ? <Mass_part /> : null}
                {units.Area ? <Area_part /> : null}
                {units.Energy ? <Energy_part /> : null}
                {units.Frequency ? <Frequency_part /> : null}
                {units.Presure ? <Presure_part /> : null}
                {units.Speed ? <Speed_part /> : null}
                {units.Volume ? <Volume_part /> : null}
                {units.Angle ? <Angle_part /> : null}
                {units.Voltage ? <Voltage_part /> : null}
                {units.Current ? <Current_part /> : null}
                {units.Power ? <Power_part /> : null}
            </div>
        </div>
    </>);
}
export default AlertOne;



// import React, { useState } from 'react';
// import './alertOne.css';
// import Length_part from './Length_part';
// import Time_part from './Time_part';
// import Temp_part from './Temp_part';
// import Mass_part from './Mass_part';
// import Volume_part from './Volume_part';

// import Area_part from './Area_part';
// import Frequency_part from './Frequency_part';
// import Speed_part from './Speed_part';
// import Presure_part from './Presure_part';
// import Voltage_part from './Voltage_part';
// import Current_part from './Current_part';
// import Power_part from './Power_part';
// import Energy_part from './Energy_part';
// import Angle_part from './Angle_part';

// function AlertOne() {

//     var [lengthShow, setLengthShow] = useState(true);
//     var [timeShow, setTimeShow] = useState(false);
//     var [tempShow, setTempshow] = useState(false);
//     var [areaShow, setAreashow] = useState(false);
//     var [massShow, setMassShow] = useState(false);
//     var [volumeShow, setVolumeShow] = useState(false);
//     var [frequencyShow, setFrequencyShow] = useState(false);
//     var [speedShow, setSpeedShow] = useState(false);
//     var [pressureShow, setPressureShow] = useState(false);
//     var [voltageShow, setVoltageShow] = useState(false);
//     var [currentShow, setCurrentShow] = useState(false);
//     var [powerShow, setPowerShow] = useState(false);
//     var [energyShow, setEngeryShow] = useState(false);
//     var [angleShow, setAngleShow] = useState(false);

//     function ChangeUnit(eve) {
//         console.log(eve.target.value);
//         if (eve.target.value === 'Time') {
//             setTimeShow(true);
//             setLengthShow(false);
//             setTempshow(false);
//             setMassShow(false);
//             setVolumeShow(false);
//             setFrequencyShow(false);
//             setSpeedShow(false);
//             setPressureShow(false);
//             setVoltageShow(false);
//             setCurrentShow(false);
//             setPowerShow(false);
//             setEngeryShow(false);
//             setAngleShow(false);
//             setAreashow(false);


//         }

//         if (eve.target.value === 'Length') {
//             setTimeShow(false);
//             setLengthShow(true);
//             setTempshow(false);
//             setMassShow(false);
//             setVolumeShow(false);
//             setFrequencyShow(false);
//             setSpeedShow(false);
//             setPressureShow(false);
//             setVoltageShow(false);
//             setCurrentShow(false);
//             setPowerShow(false);
//             setEngeryShow(false);
//             setAngleShow(false);
//             setAreashow(false);

//         }

//         if (eve.target.value === 'Tempreture') {
//             setTimeShow(false);
//             setLengthShow(false);
//             setTempshow(true);
//             setMassShow(false);
//             setVolumeShow(false);
//             setFrequencyShow(false);
//             setSpeedShow(false);
//             setPressureShow(false);
//             setVoltageShow(false);
//             setCurrentShow(false);
//             setPowerShow(false);
//             setEngeryShow(false);
//             setAngleShow(false);
//             setAreashow(false);

//         }

//         if (eve.target.value === 'Mass') {
//             setTimeShow(false);
//             setLengthShow(false);
//             setTempshow(false);
//             setMassShow(true);
//             setVolumeShow(false);
//             setFrequencyShow(false);
//             setSpeedShow(false);
//             setPressureShow(false);
//             setVoltageShow(false);
//             setCurrentShow(false);
//             setPowerShow(false);
//             setEngeryShow(false);
//             setAngleShow(false);
//             setAreashow(false);

//         }

//         if (eve.target.value === 'Area') {
//             setTimeShow(false);
//             setLengthShow(false);
//             setTempshow(false);
//             setMassShow(false);
//             setVolumeShow(false);
//             setFrequencyShow(false);
//             setSpeedShow(false);
//             setPressureShow(false);
//             setVoltageShow(false);
//             setCurrentShow(false);
//             setPowerShow(false);
//             setEngeryShow(false);
//             setAngleShow(false);
//             setAreashow(true);

//         }
//         if (eve.target.value === 'Energy') {
//             setTimeShow(false);
//             setLengthShow(false);
//             setTempshow(false);
//             setMassShow(false);
//             setVolumeShow(false);
//             setFrequencyShow(false);
//             setSpeedShow(false);
//             setPressureShow(false);
//             setVoltageShow(false);
//             setCurrentShow(false);
//             setPowerShow(false);
//             setEngeryShow(true);
//             setAngleShow(false);
//             setAreashow(false);

//         }
//         if (eve.target.value === 'Frequency') {
//             setTimeShow(false);
//             setLengthShow(false);
//             setTempshow(false);
//             setMassShow(false);
//             setVolumeShow(false);
//             setFrequencyShow(true);
//             setSpeedShow(false);
//             setPressureShow(false);
//             setVoltageShow(false);
//             setCurrentShow(false);
//             setPowerShow(false);
//             setEngeryShow(false);
//             setAngleShow(false);
//             setAreashow(false);

//         }
//         if (eve.target.value === 'Presure') {
//             setTimeShow(false);
//             setLengthShow(false);
//             setTempshow(false);
//             setMassShow(false);
//             setVolumeShow(false);
//             setFrequencyShow(false);
//             setSpeedShow(false);
//             setPressureShow(true);
//             setVoltageShow(false);
//             setCurrentShow(false);
//             setPowerShow(false);
//             setEngeryShow(false);
//             setAngleShow(false);
//             setAreashow(false);

//         }
//         if (eve.target.value === 'speed') {
//             setTimeShow(false);
//             setLengthShow(false);
//             setTempshow(false);
//             setMassShow(false);
//             setVolumeShow(false);
//             setFrequencyShow(false);
//             setSpeedShow(true);
//             setPressureShow(false);
//             setVoltageShow(false);
//             setCurrentShow(false);
//             setPowerShow(false);
//             setEngeryShow(false);
//             setAngleShow(false);
//             setAreashow(false);

//         }
//         if (eve.target.value === 'Volume') {
//             setTimeShow(false);
//             setLengthShow(false);
//             setTempshow(false);
//             setMassShow(false);
//             setVolumeShow(true);
//             setFrequencyShow(false);
//             setSpeedShow(false);
//             setPressureShow(false);
//             setVoltageShow(false);
//             setCurrentShow(false);
//             setPowerShow(false);
//             setEngeryShow(false);
//             setAngleShow(false);
//             setAreashow(false);

//         }

//         if (eve.target.value === 'current') {
//             setTimeShow(false);
//             setLengthShow(false);
//             setTempshow(false);
//             setMassShow(false);
//             setVolumeShow(false);
//             setFrequencyShow(false);
//             setSpeedShow(false);
//             setPressureShow(false);
//             setVoltageShow(false);
//             setCurrentShow(true);
//             setPowerShow(false);
//             setEngeryShow(false);
//             setAngleShow(false);
//             setAreashow(false);

//         }
//         if (eve.target.value === 'Voltage') {
//             setTimeShow(false);
//             setLengthShow(false);
//             setTempshow(false);
//             setMassShow(false);
//             setVolumeShow(false);
//             setFrequencyShow(false);
//             setSpeedShow(false);
//             setPressureShow(false);
//             setVoltageShow(true);
//             setCurrentShow(false);
//             setPowerShow(false);
//             setEngeryShow(false);
//             setAngleShow(false);
//             setAreashow(false);

//         }
//         if (eve.target.value === 'Power') {
//             setTimeShow(false);
//             setLengthShow(false);
//             setTempshow(false);
//             setMassShow(false);
//             setVolumeShow(false);
//             setFrequencyShow(false);
//             setSpeedShow(false);
//             setPressureShow(false);
//             setVoltageShow(false);
//             setCurrentShow(false);
//             setPowerShow(true);
//             setEngeryShow(false);
//             setAngleShow(false);
//             setAreashow(false);

//         }
//         if (eve.target.value === 'Angle') {
//             setTimeShow(false);
//             setLengthShow(false);
//             setTempshow(false);
//             setMassShow(false);
//             setVolumeShow(false);
//             setFrequencyShow(false);
//             setSpeedShow(false);
//             setPressureShow(false);
//             setVoltageShow(false);
//             setCurrentShow(false);
//             setPowerShow(false);
//             setEngeryShow(false);
//             setAngleShow(true);
//             setAreashow(false);

//         }



//     }

//     return (<>
//         <div className='full'>
//             <div className="w-50 h-50 rounded shadow" id='border_div' style={{ border: '2px solid white' }}>
//                 <h1 className='pt-2 text-capitalize text-center'>Unit Converter</h1>
//                 <center>
//                     <select className="form-control mx-2 w-75 my-5" onChange={ChangeUnit}>
//                         <option>Length</option>
//                         <option>Area</option>
//                         <option>Energy</option>
//                         <option>Frequency</option>
//                         <option>Mass</option>
//                         <option>Presure</option>
//                         <option>speed</option>
//                         <option>Tempreture</option>
//                         <option>Time</option>
//                         <option>Volume</option>
//                         <option>Angle</option>
//                         <option>Voltage</option>
//                         <option>current</option>
//                         <option>Power</option>
//                     </select>
//                 </center>
//                 {lengthShow ? <Length_part /> : null}
//                 {timeShow ? <Time_part /> : null}
//                 {tempShow ? <Temp_part /> : null}
//                 {massShow ? <Mass_part /> : null}
//                 {areaShow ? <Area_part /> : null}
//                 {energyShow ? <Energy_part /> : null}
//                 {frequencyShow ? <Frequency_part /> : null}
//                 {pressureShow ? <Presure_part /> : null}
//                 {speedShow ? <Speed_part /> : null}
//                 {volumeShow ? <Volume_part /> : null}
//                 {angleShow ? <Angle_part /> : null}
//                 {voltageShow ? <Voltage_part /> : null}
//                 {currentShow ? <Current_part /> : null}
//                 {powerShow ? <Power_part /> : null}


//             </div>
//         </div>
//     </>);
// }
// export default AlertOne;
