import React, { useState } from 'react';
import { current } from 'units-converter';

import Current_part from './Current_part';
function Common4(props) {
    var [fromFirst, setFromFirst] = useState(1);
    var [fromSecond, setFromSecond] = useState(0.001);

    var valueForFirst = document.getElementById(props.firstText).value;
    var selectFirst = document.getElementById(props.firstSelect).value;
    var valueForSecond = document.getElementById(props.secondText).value;
    var selectSecond = document.getElementById(props.secondSelect).value;
    console.log(selectFirst, 'and', selectSecond);

    var lengthOne = current(valueForFirst).from(selectFirst).to(selectSecond);
    console.log(lengthOne);
    setFromFirst(valueForFirst);
    setFromSecond(lengthOne.value);


    return (<>
        {/* <Current_part
            wow1={fromFirst}
            wow2={fromSecond}
        /> */}
        <h1>wow</h1>
    </>);
}
export default Common4;