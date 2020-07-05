// import React from 'react';
// import ComB from './ComB';

// function ComA(){
//     return(
//         <ComB/>
//     );
// }
// export default ComA;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ComA(){
    var [Cname,Uname] = useState();
    var [Cpoke,Upoke] = useState();
    var [Cmoves,Umoves] = useState();
    

    function read(eve){
        Uname(eve.target.value);
    }
    // https://pokeapi.co/api/v2/pokemon/1

    useEffect(() => {
        // alert('thus is alert baby !');
        async function getData(){
            var res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${Cname}`);
            console.log(res);
            console.log(res.data.name);
            console.log(res.data.moves);
            console.log(res.data.moves[0].move.name);
            
            Upoke(res.data.name);
            // Umoves(res.data.moves.length);
            Umoves(res.data.moves[0].move.name);
            
            
        }

        getData();
    });

    return(
        <>
            <h1>You select  <span style={{color:'red'}}>{Cname} value </span></h1>
            <h1>Hello my name is <span style={{color:'red'}}> {Cpoke}</span></h1>
            <h1>I have <span style={{color:'red'}}> {Cmoves} moves</span></h1>
            
            <select onChange={read} value={Cname}>
                <option value='1'>1</option>
                <option value='25'>25</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
            </select>
        </>
    );
}
export default ComA;