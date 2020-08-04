import React, { useState } from 'react';
import States_data from './States_data';
function Tracker_District() {

    var [Cname, Uname] = useState('');
    var [Cbtn, Ubtn] = useState([]);
    var [allready, setAllRedy] = useState([]);

    function read(eve) {
        var value = eve.target.value;
        console.log(value);
        Uname(value);
    }
    var Cname2 = Cname.charAt(0).toUpperCase() + Cname.slice(1);

    function clickBtn(evt) {
        if (evt.key === 'Enter' || evt.target.name === 'gogo') {
            if (Cname === '') {
                alert('Enter city or district or state name');
            }
            fetch('https://api.covid19india.org/v2/state_district_wise.json')
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    var coronaData = data;
                    Ubtn(coronaData);
                })
                .catch(error => alert('internet connection problem !'))
        }
    }

    fetch('https://api.covid19india.org/v2/state_district_wise.json')
        .then(res => res.json())
        .then(data => {
            // console.log('from outsideer', data);
            var coronaData = data;
            setAllRedy(coronaData);

        })
    return (<>
        <h1 className='text-capitalize text-center text-danger mt-3 mb-1' >Live Covid 19 Cases</h1>
        <div id='whetherone'>
            <input type="text" list='browsers' className='form-control mt-2' onChange={read} onKeyPress={clickBtn} value={Cname} id="inlineFormInput" placeholder='Search City or State or District' autoComplete='off' />

            {/* For Autocomplete */}
            <datalist id="browsers">
                {
                    allready.map((val, index) => {
                        {/* console.log(val.state) */ }
                        return (
                            val.districtData.map((current, id) => {
                                return <option value={current.district}></option>
                            })
                        );
                    })
                }
                <States_data />

            </datalist>
            <button type="submit" onClick={clickBtn} name='gogo' id='searchBtn' className="btn btn-primary mt-2 mb-2">Search</button>
        </div>

        <div className='container-fluid table-responsive'>
            <table className='table table-striped table-bordered  text-center'>
                <tr>
                    <th className='bg-light'>State</th>
                    <th className='bg-light'>District</th>
                    <th className='bg-light'>Active</th>
                    <th className='bg-light'>Recovered</th>
                    <th className='bg-light'>Deaths</th>
                    <th className='bg-light'>confirmed</th>
                </tr>
                <tbody>

                    {
                        Cbtn.map((val, index) => {
                            {/* console.log(val); */ }
                            return (
                                val.districtData.map((current, id) => {
                                    {/* console.log(current.district); */ }
                                    if (current.district === Cname2 || val.state === Cname2) {
                                        return <>
                                            <tr style={{ border: '2px solid red' }}>
                                                <td>{val.state}</td>
                                                <td>{current.district}</td>
                                                <td>{current.active}</td>
                                                <td>{current.recovered}</td>
                                                <td>{current.deceased}</td>
                                                <td>{current.confirmed}</td>
                                            </tr>
                                        </>
                                    }
                                })
                            );

                        })
                    }

                    {
                        allready.map((val, id) => {
                            return (
                                val.districtData.map((current, id) => {
                                    {/* console.log(current.district); */ }
                                    return <>
                                        <tr>
                                            <td>{val.state}</td>
                                            <td>{current.district}</td>
                                            <td>{current.active}</td>
                                            <td>{current.recovered}</td>
                                            <td>{current.deceased}</td>
                                            <td>{current.confirmed}</td>
                                        </tr>
                                    </>

                                })
                            );

                        })
                    }
                </tbody>
            </table>
        </div>
    </>);
}
export default Tracker_District;