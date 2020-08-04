import React, { useState } from 'react';
import './calc.css';
import BackspaceIcon from '@material-ui/icons/Backspace';

function Calculator() {

    var [result, setResult] = useState('');

    function accept(eve) {
        // alert(eve.target.name);
        setResult(result + eve.target.name);
    }
    function calculate() {
        try {
            setResult(eval(result.toString()));
        }
        catch (error) {
            setResult('ERROR');
        }
    }
    function decOne() {
        try {
            setResult(result.slice(0, result.length - 1));
        }
        catch (error) {
            setResult('TypeError');
        }
    }
    function ClearAll() {
        setResult('');
    }

    return (<>
        <h1 className='text-capitalize my-5 text-center text-info'>Calculator</h1>
        <div className='container my-5'>
            <div className='row' id='rowone'>
                <div className='col-lg-6 col-12 ml-5' id='calc'>
                    <input type='text' value={result} id='display' className='bg-light' name='answer' />

                    <button className='btn btn-outline-warning answer2' onClick={ClearAll}>AC</button>
                    <button className='btn btn-outline-warning answer2' onClick={decOne}><BackspaceIcon /></button>
                    <button className='btn btn-outline-warning answer2' onClick={accept} name='%'>M</button>
                    <button className='btn btn-outline-warning answer2' onClick={accept} name='/'>%</button>
                    <button className='btn btn-outline-warning' onClick={accept} name='7'>7</button>
                    <button className='btn btn-outline-warning' onClick={accept} name='8'>8</button>
                    <button className='btn btn-outline-warning' onClick={accept} name='9'>9</button>
                    <button className='btn btn-outline-warning answer2' onClick={accept} name='*'>x</button>
                    <button className='btn btn-outline-warning' onClick={accept} name='4'>4</button>
                    <button className='btn btn-outline-warning' onClick={accept} name='5'>5</button>
                    <button className='btn btn-outline-warning' onClick={accept} name='6'>6</button>
                    <button className='btn btn-outline-warning answer2' onClick={accept} name='-'>-</button>
                    <button className='btn btn-outline-warning' onClick={accept} name='1'>1</button>
                    <button className='btn btn-outline-warning' onClick={accept} name='2'>2</button>
                    <button className='btn btn-outline-warning' onClick={accept} name='3'>3</button>
                    <button className='btn btn-outline-warning answer2' onClick={accept} name='+'>+</button>

                    <button className='btn btn-outline-warning' onClick={accept} name='**'>P</button>
                    <button className='btn btn-outline-warning' onClick={accept} name='0'>0</button>

                    <button className='btn btn-outline-warning' onClick={accept} name='.'>.</button>
                    <button className='btn rounded-circle answer' onClick={calculate} name='='>=</button>



                </div>
            </div>
        </div>

    </>);

}
export default Calculator;