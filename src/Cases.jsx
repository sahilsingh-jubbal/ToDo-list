import React from 'react';
function Cases(props) {
    return (<>
        <div className='container-fluid mt-5'>
            <div className="alert alert-primary rounded mt-5 text-center text-capitalize w-75 mx-auto" role="alert">

                <h1>City name <span style={{color:'green' }}>{props.name}</span></h1>
                <h1>confirmed cases <span style={{color: 'red'}}>{props.confirm_city}</span></h1>
            </div>
        </div>
    </>);
}
export default Cases;