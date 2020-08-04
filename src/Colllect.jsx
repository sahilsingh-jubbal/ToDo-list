import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Mainnote from './Mainnote';
import Subnote2 from './Subnote2';
import Footer2 from './Footer2';

function Colllect(){

    var [Cbtn,Ubtn] = useState([]);

    function addData(Cname){
        // alert('cliked baby');
        console.log(Cname);
        Ubtn((prev) => {
            return[...prev,Cname];
        });
    }

    function deleteone(id){ 
        // alert('cliked baby for delete man !!');
        Ubtn((prev) => {
            return (prev.filter((current,index) => {
                return id!==index;
            }));
        });
    }

    return(<>
        <h1 className='text-capitalize text-center text-warning mt-4'>Google keep app</h1>
        <Mainnote action={addData}/>
        
        <div className='row'> 
        {
            Cbtn.map((current,index) => {
              return(<Subnote2 value={current} id={index} del={deleteone}/>);
            })
        }      
        </div>
        <Footer2 />
    </>);
}
export default Colllect;