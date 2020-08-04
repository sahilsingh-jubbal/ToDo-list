import React, { useState } from "react";
import './index.css';
import Todo2 from './Todo2';
import Footer2 from "./Footer2";
function List2() {

    var [Cname, Uname] = useState();

    var [Cbtn, Ubtn] = useState([]);

    function read(eve) {
        var value = eve.target.value;
        console.log(value);
        Uname(value);
    }

    function click() {
        // alert('clicked');
        // Ubtn(Cname);
        // console.log(Cbtn);

        if (Cname === '') {
            alert('Enter item first !!');
        }

        else {
            Ubtn((prev) => {
                return [...prev, Cname];
            });

            Uname('');
        }

    }

    function delOne(id) {
        // alert('deletd baby');
        Ubtn((prev) => {
            return (prev.filter((current, index) => {
                return (index !== id);
            }));
        });
    }

    return (<>
        <body style={{ border: '0.1px solid white', backgroundColor: 'wheat' }}>
            <h1 className='text-capitalize text-center text-danger mt-5 mb-3'>ToDo list</h1>

            <div className='container mb-5'>
                <div className='col-lg-8 col-12 mx-auto'>
                    <div className="card w-75 mx-auto shadow rounded" id='card_list' style={{ height: '600px' }}>
                        <div className="card-body">


                            <div className="form-group">

                                <div className='row'>
                                    <input type="text" className="form-control w-50 mx-auto mt-2" id="" onChange={read} placeholder="Enter an item" value={Cname} />
                                    <button className='rounded-circle btn btn-danger mr-4' onClick={click} id='btnNew'>+</button>
                                </div>
                            </div>

                            <ul>
                                {Cbtn.map((current, index) => {
                                    {/* return( <li style={{ listStyle:'none' }}> {current} </li>); */ }
                                    return (<>
                                        <Todo2
                                            value={current}
                                            id={index}
                                            del={delOne}
                                        />
                                    </>);
                                })}

                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            
        </body>
    </>);
}
export default List2;