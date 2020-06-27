import React from 'react';

function Simply(props){

    // if(props.pick == "A+" || props.pick=="a+")
    // {
    //     props.variable=4*10;

    // }

    // else if(props.pick == "A" || props.pick == "a")
    // {
    //      props.variable=4*9;
    // }

    // else if(props.pick == "B+" || props.pick == "b+")
    // {
    //     props.variable=4*8;
    // }

    // else if(props.pick == "B" || props.pick == "b" )
    // {
    //     props.variable=4*7;
    // }


    // else if(props.pick == "C+" || props.pick == "c+")
    // {
    //     props.variable=4*6;
    // }

    // else if(props.pick == "C" || props.pick == "c")
    // {
    //     props.variable=4*5;
    // }

    // else if(props.pick == "D" || props.pick == "d")
    // {
    //     props.variable=4*4;
    // }

    // else if(props.pick == "F" || props.pick == "f")
    // {
    //     props.variable=4*0;
    // }

return(
<>
{/* {props.variable} */}

<select>

    <option value=' '></option>
    <option>A+</option>
    <option>A</option>
    <option>B+</option>
    <option>B</option>
    <option>C+</option>
    <option>C</option>
    <option>D</option>
    <option>F</option>
</select>




</>);
    

}

export default Simply;