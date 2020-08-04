import React, { useState } from 'react';
import './alertOne.css';
import { length } from 'units-converter';
import Sdata_units from './Sdata_units';

function Length_part() {

    var [fromFirst, setFromFirst] = useState(1);
    var [fromSecond, setFromSecond] = useState(1000);
    var [simpleH3, SetSimpleH3] = useState(false);
    var [forH3, setforH3] = useState({
        select1:'',
        select2:''
    });

    var number;
    function OnChangeFirst(eve) {
        var valueForFirst = document.getElementById('firstfor').value;
        var selectFirst = document.getElementById('selectOne').value;
        var valueForSecond = document.getElementById('secondfor').value;
        var selectSecond = document.getElementById('selectTwo').value;
        console.log(selectFirst, 'and', selectSecond);

        var lengthOne = length(valueForFirst).from(selectFirst).to(selectSecond);
        console.log(lengthOne);
        setFromFirst(valueForFirst);
        setFromSecond(lengthOne.value);
        SetSimpleH3(true);
        setforH3({
            select1:selectFirst,
            select2:selectSecond
        });

    }
    function OnChangeSecond(eve) {
        var valueForFirst = document.getElementById('firstfor').value;
        var selectFirst = document.getElementById('selectOne').value;
        var valueForSecond = document.getElementById('secondfor').value;
        var selectSecond = document.getElementById('selectTwo').value;
        console.log(selectFirst, 'and', selectSecond);

        var lengthOne = length(valueForSecond).from(selectSecond).to(selectFirst);
        console.log(lengthOne);
        setFromFirst(lengthOne.value);
        setFromSecond(valueForSecond);
        SetSimpleH3(true);
        setforH3({
            select1:selectFirst,
            select2:selectSecond
        });

    }

    // var centi = 'cm';
    // var kilo = 'km';
    // var lengthOne = length(12).from(centi).to(kilo);
    // console.log(lengthOne);
    return (<>

        <div id='st1'>
            <div class="form-group">
                <input type="Number" value={fromFirst} onChange={OnChangeFirst} class="form-control" id="firstfor" placeholder="" />
            </div>
            <select className="form-control w-25" id='selectOne' onChange={OnChangeFirst}>
                {
                    Sdata_units.map((val, index) => {
                        return <option value={val.options}>{val.name}</option>

                    })
                }
            </select>
        </div>
        <div id='st2'>
            <div class="form-group">
                <input type="Number" id='secondfor' value={fromSecond} onChange={OnChangeSecond} className="form-control" placeholder="" />
            </div>
            <select className="form-control w-25" onChange={OnChangeFirst} id='selectTwo'>
                <option value='m'>Meter</option>
                {
                    Sdata_units.map((val, index) => {
                        if (val.name !== 'Meter') {
                            return <option value={val.options}>{val.name}</option>
                        }
                    })
                }
            </select>
        </div>

        {simpleH3 ? <h3>{fromFirst} {forH3.select1} = {fromSecond} {forH3.select2} </h3>
            : null}

    </>);
}
export default Length_part;
