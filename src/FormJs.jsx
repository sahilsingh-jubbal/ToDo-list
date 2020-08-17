import React from 'react';
import './formjs.css';

function FormJs() {

    // more validate email
    function isEmail(emailval) {
        // lenth less than 2
        if (emailval.length <= 2) return false;
        // must include @ and .
        if (!(emailval.includes('@')) && !(emailval.includes('.'))) return false;

        var atSymbol = emailval.indexOf('@');
        // console.log(atSymbol);
        // @ symbol in at first
        if (atSymbol < 1) return false;

        var dot = emailval.indexOf('.');
        // check if dot is at last index
        if (dot === emailval.length - 1) return false;
        // check if letters betwwen @ and dot must not be less than 3
        if (dot <= atSymbol + 2) return false;

        else return true;
    }

    // var username = 'username';
    // var email = 'email';
    // var ph = 'ph';
    // var password = 'password';
    // var Cpassword = 'Cpassword';

    function read() {
        var userval = document.getElementById(username).value.trim();
        var emailval = document.getElementById(email).value.trim();
        var phoneval = document.getElementById(ph).value.trim();
        var passwordval = document.getElementById(password).value.trim();
        var cpasswordval = document.getElementById(Cpassword).value.trim();

        // for username
        if (userval === '') {
            setErrorMsg(username, 'username must not be empty');
        }
        else if (userval.length <= 2) {
            setErrorMsg(username, 'atleast 3 letters');
        } else {
            setSuccess(username);
        }

        // for email
        if (emailval === '') {
            setErrorMsg(email, 'email cannot be empty');
        }
        else if (!isEmail(emailval)) {
            setErrorMsg(email, 'Not a valid email');
        } else {
            setSuccess(email);
        }

        // for phone number
        if (phoneval === '') {
            setErrorMsg(ph, 'Phone number cannot be blank');
        }
        else if (phoneval.length < 10) {
            setErrorMsg(ph, 'Not a valid phonr number');
        }
        else if (phoneval.length === 10) {
            setSuccess(ph);
        }

        // for password
        if (passwordval === '') {
            setErrorMsg(password, 'password cannot be empty');
        }
        else if (passwordval.length < 5) {
            setErrorMsg(password, 'password is too short, at least 6 characters');
        } else {
            setSuccess(password);
        }

        // for confirm password
        if (cpasswordval === '') {
            setErrorMsg(Cpassword, 'confirmed password cannot be empty');
        }
        else if (cpasswordval !== passwordval) {
            setErrorMsg(Cpassword, 'password is not matching !');
        } else {
            setSuccess(Cpassword);
        }

        // for check all in one
        if (userval !== '' && userval.length > 2 && emailval !== '' && isEmail(emailval) && phoneval !== '' && phoneval.length === 10 && passwordval !== '' && passwordval.length > 5 && cpasswordval !== '' && cpasswordval === passwordval) {
            alert('Registration successful');

        }


    }

    function setErrorMsg(input, errormsg) {
        console.log(errormsg);
        const formGroup = input.parentElement;
        formGroup.className = 'form-group-error';
        const small = formGroup.querySelector('small');
        small.innerText = errormsg;

    }

    function setSuccess(input) {
        const formGroup = input.parentElement;
        formGroup.className = 'form-group-success';

    }

    function succesfulMsg() {
        alert('Registration successful from call');

    }
    return (<>
        <div id='fullOneV'>
            <div class="w-50">
                <div class="form">
                    <h1 class="text-center">REGISTER FORM</h1>
                    <div class="form-group">
                        <p id="exampleFormControlInput1">Username</p>
                        <input type="text" class="form-control" id="username" placeholder="Enter username" />
                        <small>Enter valid data</small>
                        <i class="fa fa-check-circle" aria-hidden="true"></i>
                        <i class="fa fa-exclamation-circle" aria-hidden="true"></i>

                    </div>
                    <div class="form-group">
                        <p id="exampleFormControlInput1">Email</p>
                        <input type="email" class="form-control" id="email" placeholder="Enter email" />
                        <small>Enter valid data</small>
                        <i class="fa fa-check-circle" aria-hidden="true"></i>
                        <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                    </div>
                    <div class="form-group">
                        <p id="exampleFormControlInput1">Phone number</p>
                        <input type="number" class="form-control" id="ph" placeholder="Enter phone number" />
                        <small>Enter valid data</small>
                        <i class="fa fa-check-circle" aria-hidden="true"></i>
                        <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                    </div>
                    <div class="form-group">
                        <p id="exampleFormControlInput1">Password</p>
                        <input type="password" class="form-control" id="password" placeholder="Enter Password" />
                        <small>Enter valid data</small>
                        <i class="fa fa-check-circle" aria-hidden="true"></i>
                        <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                    </div>
                    <div class="form-group">
                        <p id="exampleFormControlInput1">Confirm password</p>
                        <input type="password" class="form-control" id="Cpassword" placeholder="Confirm password " />
                        <small>Enter valid data</small>
                        <i class="fa fa-check-circle" aria-hidden="true"></i>
                        <i class="fa fa-exclamation-circle" aria-hidden="true"></i>

                    </div>
                    <div id='submit-id'>
                        <button onclick={read}>SUBMIT</button>
                    </div>
                </div>
            </div>

        </div>

    </>);
}
export default FormJs;