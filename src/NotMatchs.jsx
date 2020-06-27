import React from 'react';

function NotMatch(props){
    var x=props.x;
    var y=props.y;
    var z=props.z;


    return(
    <>
       <h3>{x} {y} {z} This is not mathing</h3> 
    </>
     );
    
}

export default NotMatch;