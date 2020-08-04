import React, { useState } from 'react';
import './whether.css';
import mountain3 from './images/mountain3.jpg';
import SearchIcon from '@material-ui/icons/Search';

function Whether() {
    var [Cname, Uname] = useState();
    var [Cbtn, setBtn] = useState({});
    var [country, setCountry] = useState({});
    var [descrip, setDescrip] = useState('');
    var [show, setShow] = useState(false);
    var [allData, setAllData] = useState({});
    var [wind, setWind] = useState({});

    function read(eve) {
        var value = eve.target.value;
        console.log(value);
        Uname(value);
    }
    function clickbtn(evt) {
        if (evt.key === 'Enter' || evt.target.name === 'gogo') {
            // console.log(evt.key);
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Cname}&appid=0d2033857c894273a60109d86170fd86`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    var tempValue = data.main;
                    var countryvalue = data.sys;
                    var weather = data.weather[0].description;
                    var data = data;
                    var wind = data.wind;

                    setAllData(data);
                    setBtn(tempValue);
                    setCountry(countryvalue);
                    setDescrip(weather);
                    setShow(true);
                    setWind(wind);


                })
                .catch(error => alert('wrong city name'))
        }
    }

    var cssStyle = {};
    var temp2 = parseInt(Cbtn.temp) - 273;
    if (temp2 <= 25) {
        cssStyle.backgroundColor = 'cornflowerblue';
    }
    else {
        cssStyle.backgroundColor = 'Orange';
    }
    // var date = new Date().toLocaleDateString();
    var date1 = new Date().getDay();
    var date2 = new Date().getDate();
    var date3 = new Date().getMonth();
    var date4 = new Date().getFullYear();

    var weekend = [];
    weekend[0] = 'sunday';
    weekend[1] = 'Monday';
    weekend[2] = 'Tuesday';
    weekend[3] = 'Wednsday';
    weekend[4] = 'Thursday';
    weekend[5] = 'Friday';
    weekend[6] = 'Saturday';

    var month = [];
    month[0] = 'January';
    month[1] = 'February';
    month[2] = 'March';
    month[3] = 'April';
    month[4] = 'May';
    month[5] = 'June';
    month[6] = 'July';
    month[7] = 'Auguest';
    month[8] = 'September';
    month[9] = 'Octomber';
    month[10] = 'November';
    month[11] = 'December';

    var day = weekend[date1];
    var date = date2;
    var month2 = month[date3];
    var year = date4;

    console.log(weekend[date1]);
    console.log(date2);
    console.log(month[date3]);
    console.log(date4);


    return (<>
        <body id='bodyOne' style={{ backgroundImage: `url(${mountain3})` }}>
            <div className='container'>
                <div className="form-row align-items-center w-100 my-5" id='whetherone'>
                    <input type="text" list='browsers' className='form-control mb-2' onChange={read} onKeyPress={clickbtn} value={Cname} id="inlineFormInput" placeholder='Enter city name' autoComplete='off' />
                    <datalist id="browsers">
                        <option value="Delhi"></option>
                        <option value="Agra"></option>
                        <option value="Hyderabad"></option>
                        <option value="Mumbai"></option>
                        <option value="Pune"></option>
                        <option value="San Francisco"></option>
                        <option value="New York"></option>
                        <option value="Seattle"></option>
                        <option value="Los Angeles"></option>
                        <option value="Chicago"></option>
                        <option value="Jammu"></option>
                        <option value="nigeria"></option>
                        <option value="amritsar"></option>
                    </datalist>
                    <button type="submit" name='gogo' onClick={clickbtn} id='searchBtn' className="btn btn-primary mb-2"><SearchIcon />Search</button>

                </div>
            </div>

            {show ?
                <div>
                    <br /><br /><br />
                    <h1 className='text-white text-center' id='countryOne'>{allData.name}, {country.country}</h1>
                    <h4 className='text-white text-center my-3' id='countryOne'>{day}, {date} {month2} {year}</h4>
                    <div id='TempDiv'>
                        <div id='temp' id='cssone'>
                            <h1 style={{ color: 'white' }} className='text-center'>{parseInt(Cbtn.temp) - 273} °C</h1>
                        </div>
                    </div>
                    <h1 id='countryOne' className='text-center text-light my-3'>{descrip}</h1>

                    <div className='card w-25 shadow' style={{ backgroundColor: 'rgba(255,255, 255,0.2)' }}>
                        <div className='card-body text-dark'>
                            <h1>{allData.name},{country.country}</h1>
                            <h1>Tempreture: {parseInt(Cbtn.temp) - 273} °C</h1>
                            <h1>Humidity: {Cbtn.humidity} %</h1>
                            <h1>pressure: {Cbtn.pressure} mb</h1>
                            <h1>Visibility: {parseInt(allData.visibility) / 1000}KM</h1>
                            <h1>Wind speed: {wind.speed} Km/hr</h1>
                            <h1>Whether Description: {descrip}</h1>
                        </div>
                    </div>
                </div>

                : null
            }
        </body>
    </>);
}
export default Whether;



// import React, {useState} from 'react';
// import './whether.css';

// function Whether() {
//     var [Cname, Uname] = useState();
//     var [Cbtn, Ubtn] = useState({});
//     var [show, setShow] = useState(false);
//     var [all, setAll] = useState({});
//     var [weather, setWhether] = useState();

//     function read(eve) {
//         var value = eve.target.value;
//         console.log(value);
//         Uname(value);
//     }
//     function clickbtn() {
//         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Cname}&appid=0d2033857c894273a60109d86170fd86`)
//             .then(response => response.json())
//             .then(data => {
//                 if (data.message === "city not found") {
//                     alert('city not found');
//                     setShow(false);
//                 }
//                 else {
//                     console.log(data)
//                     var tempVal = data.main;
//                     var data = data;
//                     var weather = data.weather[0].description;
//                     Ubtn(tempVal);
//                     setShow(true);
//                     setAll(data);
//                     setWhether(weather);
//                 }

//             })
//         // .catch(error => alert('Wrong city name'))

//     }
//     var cssStyle = {};
//     var temp2 = parseInt(Cbtn.temp) - 273;
//     if (temp2<=25){
//         cssStyle.backgroundColor='cornflowerblue';
//     }
//     else{
//         cssStyle.backgroundColor='orange';
//     }
//         return (<>
//             <div className='container'>
//                 <div className="form-row align-items-center w-25 my-5" id='whetherone'>
//                     <div className="col-auto">
//                         <label className="sr-only" for="inlineFormInput">Name</label>
//                         <input type="text" onChange={read} className="form-control mb-2" id="inlineFormInput" placeholder='Enter city name' />
//                     </div>
//                     <div className="col-auto">
//                         <button type="submit" onClick={clickbtn} id='searchBtn' className="btn btn-primary mb-2">Search</button>
//                     </div>
//                 </div>
//             </div>
//             {show ?
//                 <div>
//                     <div className='card shadow w-25 text-light' style={cssStyle}>
//                         <div className='card-body'>
//                             <h1>{parseInt(Cbtn.temp) - 273} °C</h1>
//                             <h1>{all.name}</h1>
//                             <h1>{weather}</h1>
//                         </div>
//                     </div>
//                 </div>
//                 : null}

//         </>);
// }
// export default Whether;