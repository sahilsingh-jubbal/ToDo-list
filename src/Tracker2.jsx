import React, { useState } from 'react';
import Sdata4 from './Sdata4';
import Sdata2 from './Sdata2';
import State from './State';
import Info from './Info';
import Footer2 from './Footer2';


function Tracker2() {

    var [Cname, Uname] = useState('');
    
    function read(eve) {
        var value = eve.target.value;
        // console.log(value);
        Uname(value);
        
    }
    var Cname2 = Cname.charAt(0).toUpperCase() + Cname.slice(1);

    return (<>

        <h1 className='text-capitalize text-danger text-center mt-5'>Welcome to covid-19 tracker</h1>
        <div className='container my-4'>
            <div className='col-lg-6 col-12 mx-auto'>
                <div className="form-group">
                    <input type="text"
                        className="form-control w-50 mx-auto mb-5 text-capitalize"
                        autoComplete='on'
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

        {
            Sdata4.map((val, index) => {
                return (
                    val.districtData.map((current, id) => {
                        if (current.district === Cname2) {
                            console.log('active cases', current.active);
                            return (<>
                                <Info
                                    state={val.state}
                                    district={current.district}
                                    active={current.active}
                                    confirmed={current.confirmed}
                                    deceased={current.deceased}
                                    recovered={current.recovered}
                                />

                            </>)
                        }
                    })
                )
            })

        }

        {

            Sdata2.map((val, index) => {

                if (val.state === Cname2) {
                    console.log('state', val.active)
                    return <State
                        confirm={val.confirmed}
                        active={val.active}
                        recover={val.recovered}
                        death={val.deaths}
                    />

                }
            })
        }

        
        

    </>);
}
export default Tracker2;