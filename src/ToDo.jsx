// import React from 'react';
// function Todo(props){

//     return(
//         <>
//             <div className='delBtn'>

//             {/* alt + 0215 = × */}
//             {/* <button onClick={props.ondel} >×</button> */}
//             <button onClick={() => {
//                 props.onDel(props.id);
//             }} >×</button>
            
//             <li>{props.value}</li>
//             </div>
//         </>) ;

// }
// export default Todo;


// import React from 'react';

// function Todo(props){
//     return(
//         <>
//             <div className='delBtn'>
//                 {/* <button onClick={props.ongo}>×</button> */}
//                 <button onClick={() => {
//                     props.ongo(props.id)
//                 }}>×</button>
                
//                 <li>{props.value}</li>
//             </div>
//         </>
//         );
// }
// export default Todo;


import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';


function Todo(props){
    
    // var [line,setLine]  = useState(false);

    function remove(){
        console.log('deleted');
        // setLine(true);
        props.deleteItms(props.id);
    }
    
    return(
        <>
        <div className='delBtn'>
          

            <button onClick={remove}><DeleteIcon/></button>
            {/* <li style={{textDecoration:line ? 'line-through' : 'none'}}>{props.value}</li> */}
            {/* <li style={{ textDecoration: line ? 'line-through': 'none' }}>{props.value}</li> */}
            <li>{props.value}</li>
        </div>
       </>);
}
export default Todo;

