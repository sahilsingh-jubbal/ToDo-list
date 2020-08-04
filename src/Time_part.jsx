import React, { useState } from 'react';
import './alertOne.css';
import { time } from 'units-converter';
import Sdata_units, { timeData } from './Sdata_units';

function Time_part() {

    var [fromFirst, setFromFirst] = useState(1);
    var [fromSecond, setFromSecond] = useState(60);

    function OnChangeFirst(eve) {
        var valueForFirst = document.getElementById('firstfor').value;
        var selectFirst = document.getElementById('selectOne').value;
        var valueForSecond = document.getElementById('secondfor').value;
        var selectSecond = document.getElementById('selectTwo').value;
        console.log(selectFirst, 'and', selectSecond);

        var lengthOne = time(valueForFirst).from(selectFirst).to(selectSecond);
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

        var lengthOne = time(valueForSecond).from(selectSecond).to(selectFirst);
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
                    timeData.map((val, index) => {
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
export default Time_part;




// import React, { useState } from 'react';
// import './alertOne.css';
// import { time } from 'units-converter';
// import Common3 from './Common3';

// function Time_part() {

//     var [fromFirst, setFromFirst] = useState(1);
//     var [fromSecond, setFromSecond] = useState(60);

//     function OnChangeFirst(valueForFirst,selectFirst,valueForSecond,selectSecond) {
//         console.log(selectFirst, 'and', selectSecond);

//         var lengthOne = time(valueForFirst).from(selectFirst).to(selectSecond);
//         console.log(lengthOne);
//         setFromFirst(valueForFirst);
//         setFromSecond(lengthOne.value);


//     }
//     function OnChangeSecond(valueForFirst,selectFirst,valueForSecond,selectSecond) {
//         console.log(selectFirst, 'and', selectSecond);

//         var lengthOne = time(valueForSecond).from(selectSecond).to(selectFirst);
//         console.log(lengthOne);
//         setFromFirst(lengthOne.value);
//         setFromSecond(valueForSecond);

//     }


//     return (<>
//         <Common3
//             action1={OnChangeFirst}
//             action2={OnChangeSecond}
//             valueOne={fromFirst}
//             valueTwo={fromSecond}
//         />

//     </>);
// }
// export default Time_part;
