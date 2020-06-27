// import React, { useState } from 'react';
// import Button from '@material-ui/core/Button';
// import AddIcon from '@material-ui/icons/Add';
// import DeleteIcon from '@material-ui/icons/Delete';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import ReplayIcon from '@material-ui/icons/Replay';



// function CreateNote(props){

//     var [Cname,Uname] = useState({
//         title: '',
//         content:''
//     });

//     var [Cpro,Upro] = useState('');

//     var [Cexpand,Uexpand] = useState(false);

//     // var [CReplay,UReplay] = useState(() => {
//     //     return(<ReplayIcon color='primary' className='proMan'/>);
//     // });

//     // var [Cvar,Uvar] = useState('');


//     function read(eve){
        
//         var value=eve.target.value;
//         var name=eve.target.name;
//         Uname((oldarray) => {
//             return{
//                 ...oldarray,
//                 [name]:value
//             }
//         });

//         Upro(() => {
//             return(<CircularProgress color='secondary' className='proMan'/>);
//         })

//         // UReplay('')
        
//     }
    
//     // function click(){

//     //     Uvar(Cname);
        
//     // }

//     function sendData(){
        
//         if(Cname.title === "" || Cname.content === "" )
//         {
//             alert('Data Enter To Karo Bahi!!!!');
//         }
//         else{
//         // console.log(Cname);
//         props.call(Cname);

        
//         Uname({
//             title: '',
//             content:''
//         });

//         Upro('');

//         }
//     }

//     function mazimize(){
//         Uexpand(true);
//     }

//     function minimize(){
//         Uexpand(false);
//     }
    
    



// return(<>

// <div className='outer'>   
//         <div className='main_note'>
            
//             {Cexpand ? 
//             <input
//                 type='text'
//                 placeholder='Title'
//                 value={Cname.title}
//                 onChange={read}
//                 name='title'
//                 autoComplete='off'
//             />
//             : ''}

//             <textarea
//                 placeholder='Write a note....'
//                 value={Cname.content}
//                 onClick={mazimize}
//                 onDoubleClick={minimize}
//                 onChange={read}
//                 name='content'
//                 autoComplete='off'>
//             </textarea>
            
//             {Cexpand ?
//             <span className='progress'>
//                 {Cpro}
//             </span>
//             :''}
//             {/* <div className='progress'>
//                 {CReplay}
//             </div> */}


//         </div>
//         {Cexpand ?
//         <Button className='newbtn' onClick={sendData}><AddIcon/></Button>
//             :''}
        
//         </div>  



//         {/* <h1>{Cvar.title}</h1>
//         <p>{Cvar.content}</p> */}

// </>);
    
// }
// export default CreateNote;