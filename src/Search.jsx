// import React, { useState } from 'react';
// import './index.css';
// import Sresult from './Sresult';

// function Search(){
//     var [img,setImg] = useState('');

//     function read(eve){
//         var value = eve.target.value;
//         setImg(value);
//         console.log(value);
//     }
    

// return(<>
//     <div className='searchDiv'>
//         <input type='text' onChange={read} value={img} placeholder='Enter any image' />
//     </div> 

//     {/* ternary opearator */}
//     {img!== '' ? <Sresult name={img} /> : null} 
    
//     {/* <Sresult name={img} /> */}
//     </>);
// }
// export default Search;




// for responsive webiste of react js

import React, { useState } from 'react';
import Sresult from './Sresult';


function Search(){

    var [Ctext,Utext] = useState('');


    function read(eve){
        var value=eve.target.value;
        console.log(value);

        Utext(value);

        // return(<Sresult value={value}/>);
    }
    return(<>
        <div className='container my-5'>
            <div className='col-lg-6 col-md-6 col-12 mx-auto'>
                <form>
                    <div className="form-group">
                        <input type="text"
                            className="form-control w-50 mx-auto"
                            id="search"
                            value={Ctext}
                            placeholder="Search any image"
                            onChange={read}
                            autoComplete='off'        
                        />
                        {/* <Sresult value={Ctext}/> */}

                        { Ctext!== '' ?  <Sresult value={Ctext}/> : null}
                    </div>
                </form>
            </div>
        </div>
    </>);
}
export default Search;