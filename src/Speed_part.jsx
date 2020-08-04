import React, { useState } from 'react';
import './alertOne.css';
import { speed } from 'units-converter';
import Sdata_units, { timeData, tempData, AreaData, MassData, VolumeData, FrequencyData, SpeedData, PressureData, VoltageData, CurrentData, PowerData, EnergyData, AngleData } from './Sdata_units';

function Speed_part() {

    var [fromFirst, setFromFirst] = useState(1);
    var [fromSecond, setFromSecond] = useState(3.6);

    function OnChangeFirst(eve) {
        var valueForFirst = document.getElementById('firstfor').value;
        var selectFirst = document.getElementById('selectOne').value;
        var valueForSecond = document.getElementById('secondfor').value;
        var selectSecond = document.getElementById('selectTwo').value;
        console.log(selectFirst, 'and', selectSecond);

        var lengthOne = speed(valueForFirst).from(selectFirst).to(selectSecond);
        console.log(lengthOne);
        setFromFirst(valueForFirst);
        setFromSecond(lengthOne.value);


    }
    function OnChangeSecond(eve) {
        var valueForFirst = document.getElementById('firstfor').value;
        var selectFirst = document.getElementById('selectOne').value;
        var valueForSecond = document.getElementById('secondfor').value;
        var selectSecond = document.getElementById('selectTwo').value;
        console.log(selectFirst, 'and', selectSecond);

        var lengthOne = speed(valueForSecond).from(selectSecond).to(selectFirst);
        console.log(lengthOne);
        setFromFirst(lengthOne.value);
        setFromSecond(valueForSecond);

    }


    return (<>
        <div id='st1'>
            <div class="form-group">
                <input type="text" value={fromFirst} onChange={OnChangeFirst} class="form-control" id="firstfor" placeholder="" />
            </div>
            <select className="form-control w-25" id='selectOne' onChange={OnChangeFirst}>
                {
                    SpeedData.map((val, index) => {
                        return <option value={val.options}>{val.name}</option>
                    })
                }
            </select>
        </div>
        <div id='st2'>
            <div class="form-group">
                <input type="text" id='secondfor' value={fromSecond} onChange={OnChangeSecond} className="form-control" placeholder="" />
            </div>
            <select className="form-control w-25" onChange={OnChangeFirst} id='selectTwo'>
                <option value='km/h'>Kilo meter per Hour</option>
                {
                    SpeedData.map((val, index) => {
                        if (val.name !== 'Kilo meter per Hour') {
                            return <option value={val.options}>{val.name}</option>
                        }
                    })
                }

            </select>
        </div>

    </>);
}
export default Speed_part;
