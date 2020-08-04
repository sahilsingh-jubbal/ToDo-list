import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
function Subnote2(props){
    function delOne(){
        // alert('delted ,an !!');
        props.del(props.id);
    }
    return(<>{/* subnote */}
            
        <div className=" my-5 w-25" id='subnote' style={{marginLeft:'50px'}}>
            <div className="card-body shadow">
                <h4>{props.value.title}</h4>
                <p>{props.value.details}</p>
            </div>
            <button id='delete_subnote' onClick={delOne} style={{ width:'45px',height:'42px' }} className='btn btn-danger text-light rounded-circle'><DeleteIcon/></button>
        </div>
      
    </>)
}
export default Subnote2;