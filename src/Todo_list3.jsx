import React, { useState } from 'react';
import './todo.css';
import AddIcon from '@material-ui/icons/Add';
import ToDo3 from './ToDo3';
function Todo_list3() {
    var [Cname, Uname] = useState('');
    var [Cbtn, Ubtn] = useState([]);
    var [iconAdd, setIconAdd] = useState(true);
    var [iconEdit, seticonEdit] = useState(false);

    function read(eve) {
        var value = eve.target.value;
        console.log(value);
        Uname(value);

    }
    function clickOne() {
        if (Cname === '') {
            alert('Enter item first');
        }
        else {
            // Ubtn(Cname);
            Ubtn((prev) => {
                return [...prev, Cname];
            })
            Uname('');
            setIconAdd(true);
            seticonEdit(false);
        }

    }

    function delOne(id) {
        // alert('cliekd from main todo');
        Ubtn((prev) => {
            return prev.filter((current, index) => {
                return index !== id;
            })
        })
    }

    function editOne(id, valueOne) {
        console.log('ths is value', valueOne);
        Ubtn((prev) => {
            return prev.filter((current, index) => {
                return index !== id;
            })
        })
        Uname(valueOne);
        setIconAdd(false);
        seticonEdit(true);

    }
    return (<>
        <div className='main_div'>
            <div className='rounded' id='todo_list'>
                <h1 className='text-center mt-2' id='head_for_todo'>ToDo list</h1>
                <form className="form-inline">
                    <div id='todo_div' className='mt-3'>
                        <div className="form-group mx-sm-3 mb-2">
                            <input type="text" onChange={read} value={Cname} className="form-control" id="input_list" placeholder="Enter an Item" autocomplete='off' />
                        </div>
                        {iconAdd ? <button type="button" onClick={clickOne} className="btn btn-primary mb-2 rounded-circle"><AddIcon /></button>
                            : null}

                    </div>
                </form>
                {iconEdit ? <button className='btn btn-success ml-3 mt-1 w-75 mb-3' onClick={clickOne} style={{ boxShadow: 'none' }}>Edit Item</button>
                    : null}

                {
                    Cbtn.map((val, index) => {
                        return <ToDo3
                            id={index}
                            value={val}
                            action={delOne}
                            action2={editOne}
                        />
                    })
                }
            </div>

        </div>

    </>)
}
export default Todo_list3;