import React, { useState } from 'react';
function Tracker3() {

    var [Cname, Uname] = useState('');
    var [Cbtn, Ubtn] = useState([]);
    var [allready, setAllRedy] = useState([]);

    function read(eve) {
        var value = eve.target.value;
        console.log(value);
        Uname(value);
    }
    var Cname2 = Cname.charAt(0).toUpperCase() + Cname.slice(1);

    function clickBtn() {
        if (Cname === '') {
            alert('Enter valid State name');
        }
        fetch('https://api.covid19india.org/data.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                var coronaData = data.statewise;
                Ubtn(coronaData);
            })
            .catch(error => alert('internet connection problem !'))
    }

    fetch('https://api.covid19india.org/data.json')
        .then(res => res.json())
        .then(data => {
            console.log('from outsideer', data);
            var coronaData = data.statewise;
            setAllRedy(coronaData);

        })

    return (<>
        <h1 className='text-capitalize text-center text-danger mt-3 mb-3'>Live Covid-19 Cases State-wise</h1>
        <div id='whetherone'>
            <input type="text" list='browsers' className='form-control mb-3' onChange={read} value={Cname} id="inlineFormInput" placeholder='Enter State Name' autoComplete='off' />

            {/* For Autocomplete */}
            <datalist id="browsers">
                {
                    allready.map((val, index) => {
                        return <option value={val.state}></option>
                    })
                }
            </datalist>
            <button type="submit" onClick={clickBtn} name='gogo' id='searchBtn' className="btn btn-primary mb-2">Search</button>
        </div>

        <div className='container-fluid table-responsive'>
            <table className='table table-striped table-bordered  text-center'>
                <tr>
                    <th className='bg-light'>Last updated</th>
                    <th className='bg-light'>State</th>
                    <th className='bg-light'>Active</th>
                    <th className='bg-light'>Confirmed</th>
                    <th className='bg-light'>Deaths</th>
                    <th className='bg-light'>Recovered</th>
                </tr>
                <tbody>
                    {
                        Cbtn.map((val, index) => {
                            {/* console.log(val); */ }
                            if (Cname2 === val.state) {
                                return (<>
                                    <tr style={{ border: '2px solid red' }}>
                                        <td>{val.lastupdatedtime}</td>
                                        <td>{val.state}</td>
                                        <td>{val.active}</td>
                                        <td>{val.confirmed}</td>
                                        <td>{val.deaths}</td>
                                        <td>{val.recovered}</td>

                                    </tr>
                                </>);
                            }
                        })

                    }

                    {
                        allready.map((val, index) => {
                            return (<>

                                <tr>
                                    <td>{val.lastupdatedtime}</td>
                                    <td>{val.state}</td>
                                    <td>{val.active}</td>
                                    <td>{val.confirmed}</td>
                                    <td>{val.deaths}</td>
                                    <td>{val.recovered}</td>
                                </tr>
                            </>);
                        })
                    }
                </tbody>
            </table>
        </div>
    </>);
}
export default Tracker3;