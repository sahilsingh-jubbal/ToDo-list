import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
function ToDo3(props) {
    function delOne() {
        // alert('deleted man !');
        props.action(props.id);
    }
    function editOne() {
        // alert('edited');
        props.action2(props.id, props.value);
    }
    return (<>
        <div className='d-flex flex-row py-1' id='show'>
            <h4 className='ml-5'>{props.value}</h4>
            <div className='gone'>
                <button className='btn ml-2' onClick={editOne} id='delBtn'><EditIcon /></button>
                <button className='btn ml-2' onClick={delOne} id='delBtn'><DeleteIcon /></button>
            </div>
        </div>
    </>)

}
export default ToDo3;