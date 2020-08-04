import React, { useState } from 'react';

function DishDetails(props) {
    var [Cname, Uname] = useState('');
    var [Cname2, Uname2] = useState('');

    function read() {
        // alert('cliked');
        Uname(props.img);
        Uname2(props.name);
        props.action(Cname);
        props.action2(Cname2);
        props.action3(props.wowone);

    }

    return (<>
        <div className='col-lg-4 col-12'>
            <img src={props.img} onClick={read} id='Dish_Menu' className='img-fluid mt-5 rounded' style={{ width: '300px', height: '250px' }} />
        </div>
        {/* <img src={Cname}/> */}
    </>);
}
export default DishDetails;