import React from 'react';
import Button from '@material-ui/core/Button';
function Calc2(props) {
    function read(eve) {
    //    console.log(props.name);
       props.action(props.name);       
    }
    return (<>
        <Button onClick={read} name={props.name} id='btns' style={{ marginLeft: '10px' }} className='my-4 mx-2'>{props.name}</Button>
    </>);
}
export default Calc2;
