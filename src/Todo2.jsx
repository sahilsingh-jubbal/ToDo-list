import React from 'react';
function Todo2(props){

    function deleteone(){
        return( props.del(props.id) );
    }

    return(
    <>
        <div className='row mt-2'>
            <button className='btn btn-outline-info rounded-circle ml-3 mr-2' onClick={deleteone} style={{height:'34px'  }}>x</button>
            <li style={{ listStyle:'none' }}> {props.value} </li> 
        </div>
    </>);
                      

}
export default Todo2;