import React from 'react'; 
import Match from './Match';
import NotMatch from './NotMatchs';

function SlotM(props){
    console.log(props);
    
    var x=props.x;
    var y=props.y;
    var z=props.z;

    return(
    (x===y &&  y===z )? <Match x={x} y={y} z={z}/> : <NotMatch x={x} y={y} z={z}/>
    );
    // if(x===y && y===z) 
    // {
    //     return(
    //     <Match x={x} y={y} z={z}/>
    //     );
    // }

    // else{

    //     return(
    //         <>
    //             <NotMatch x={x} y={y} z={z}/>
    //         </>
    //          );
    // }
    
        
}

export default SlotM;
