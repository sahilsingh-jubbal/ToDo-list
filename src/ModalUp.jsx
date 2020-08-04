import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';

function ModalUp() {
    var [strict, setStrict] = useState('');
    var [color, SetColor] = useState('none');
    var [alertOne, SetAlertOne] = useState({
        rating: '',
        fname: '',
        comments: ''
    });
    var [wow, SetDis] = useState('');

    function validateOne(eve) {
        var value = eve.target.value;
        var name = eve.target.name;

        if (name === 'fname') {
            if (value.length < 3) {
                console.log(value.length);
                setStrict('Name should be minimum of 3 letters');
                SetColor('crimson');
            }
            else if (value.length > 15) {
                // console.log(value.length);
                setStrict('Maximum 15 letters should be in name');
                SetColor('crimson');
            }

            else if (value.length >= 3 && value.length <= 15) {
                setStrict('');
                SetColor('green');
            }
        }

        SetAlertOne((prev) => {
            return {
                ...prev,
                [name]: value
            }
        });

    }

    function modalUp() {
        console.log(alertOne);
        if (alertOne.fname === '') {
            alert('Enter your name');
        }
        else {
            alert(`Rating for Dish: ${alertOne.rating}, name : ${alertOne.fname} and comments : ${alertOne.comments}`);
        }
    }

    useEffect(() => {
        console.log('this is useeffect', alertOne);
        if (alertOne.fname === '') {
            SetDis('');
        }
        else {
            SetDis('modal');
        }

    });

    return (<>
        {/* <!-- Modal --> */}
        <div className="modal fade rounded" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header" style={{ border: 'none' }}>
                        <h5 className="modal-title" id="exampleModalLabel">Comments</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body" style={{ border: 'none' }}>

                        <form className=''>
                            <div className="form-group">
                                <label>Rating</label>
                                <select onChange={validateOne} className="form-control custom-select" name='rating' type='number'>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Your Name</label>
                                <input type="text"
                                    className="form-control"
                                    onChange={validateOne}
                                    placeholder="Enter name"
                                    required
                                    style={{ border: `1.5px solid ${color}` }}
                                    name='fname'
                                    autoComplete='off'
                                />
                                <p className='text-capitalize text-danger'>{strict}</p>

                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Comments</label>
                                <textarea onChange={validateOne} className="form-control" id="exampleFormControlTextarea1" rows="5" name='comments'></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer" style={{ border: 'none' }}>
                        <Button  variant="contained" color='secondary' data-dismiss={wow} id='modal_btn' onClick={modalUp} >Submit</Button>
                    </div>
                </div>
            </div>
        </div>
    </>);
}
export default ModalUp;