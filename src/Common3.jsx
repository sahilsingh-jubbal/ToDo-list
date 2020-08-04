import React from 'react';

import Sdata_units, { timeData } from './Sdata_units';
function Common3(props){

    var valueForFirst = document.getElementById('firstfor').value
    var selectFirst = document.getElementById('selectOne').value
    var valueForSecond = document.getElementById('secondfor').value
    var selectSecond = document.getElementById('selectTwo').value

    function OnChangeFirst(){
        props.action1(valueForFirst,selectFirst,valueForSecond,selectSecond);
    }

    function OnChangeSecond(){
        props.action2(valueForFirst,selectFirst,valueForSecond,selectSecond);
    }
  
    return(<>
         <div id='st1'>
            <div class="form-group">
                <input type="text" value={props.valueOne} onChange={OnChangeFirst} class="form-control" id="firstfor" placeholder="" />
            </div>
            <select className="form-control w-25" id='selectOne' onChange={OnChangeFirst}>
                {
                    timeData.map((val, index) => {
                        return <option value={val.options}>{val.name}</option>
                    })
                }
            </select>
        </div>
        <div id='st2'>
            <div class="form-group">
                <input type="text" id='secondfor' value={props.valueTwo} onChange={OnChangeSecond} className="form-control" placeholder="" />
            </div>
            <select className="form-control w-25" onChange={OnChangeFirst} id='selectTwo'>
                <option value='min'>Minute</option>
                {
                    timeData.map((val, index) => {
                        if (val.name !== 'Minutes') {
                            return <option value={val.options}>{val.name}</option>
                        }
                    })
                }

            </select>
        </div>

    </>);
}
export default Common3;