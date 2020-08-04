import React from 'react';
function State(props) {
    return (<>
        <div className='container-fluid'>
            <div className="alert alert-warning rounded mt-5 text-center text-capitalize w-75 mx-auto" role="alert">
                <h1>Confired Cases <span style={{ color: 'blue' }}>{props.confirm}</span></h1>
                <h1>Active Cases <span style={{ color: 'orange' }}>{props.active}</span></h1>
                <h1>Recovered Cases <span style={{ color: 'green' }}> {props.recover} </span></h1>
                <h1>Total deaths <span style={{ color: 'red' }}> {props.death} </span></h1>
            </div>
        </div>
    </>);
}
export default State;