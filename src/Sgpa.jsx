import React from 'react';

function Sgpa(props){

return(
<>

<select  name={props.name1} id={props.id1} required>

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

export default Sgpa;