import React, { useState } from 'react';
import Sdata2 from './Sdata2';
import Cases from './Cases';
import State from './State';

function Tracker() {

    var [Cname, Uname] = useState('');


    function read(eve) {
        var value = eve.target.value;
        console.log(value);
        Uname(value);
    }
    // capitilize Cname 
    var Cname2 = Cname.charAt(0).toUpperCase() + Cname.slice(1);

    return (<>
        <h1 className='text-capitalize text-danger text-center mt-5'>Welcome to covid-19 tracker</h1>

        <div className='container my-4'>
            <div className='col-lg-6 col-12 mx-auto'>
                <div className="form-group">
                    <input type="text"
                        className="form-control w-50 mx-auto mb-5 text-capitalize"
                        autoComplete='off'
                        id="search"
                        placeholder="Search Nearby Area"
                        onChange={read}
                        value={Cname}
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Search For Your Safety"
                    />
                </div>
            </div>
        </div>
        {/* <h1>{Cname}</h1> */}

        {
            Sdata2.map((val, index) => {


                if (val.state === Cname2) {
                    console.log('state', val.active);
                    return (<>
                        <State
                            confirm={val.confirmed}
                            active={val.active}
                            recover={val.recovered}
                            death={val.deaths}
                        />
                    </>);
                }

                return (
                    val.districtData.map((current, id) => {

                        if (current.id === Cname2) {
                            console.log('district', current.confirmed);
                            console.log('name is', current.name);
                            return (<>
                                <Cases
                                    name={current.name}
                                    confirm_city={current.confirmed}
                                />
                            </>);
                        }
                    })
                );
            })


        }


    </>);
}
export default Tracker;