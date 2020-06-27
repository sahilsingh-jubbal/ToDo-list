// toDo list second using matrial Ui
// import React, { useState } from 'react';
// import './index.css';
// import Todo from './ToDo';
// import AddIcon from '@material-ui/icons/Add';
// import Button from '@material-ui/core/Button';
// // import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import ArchiveIcon from '@material-ui/icons/Archive';
// import AlarmIcon from '@material-ui/icons/Alarm';
// import CircularProgress from '@material-ui/core/CircularProgress';

// function App(){

//     var [Cname,Uname] = useState('');
//     var [Cbtn,Ubtn] = useState([]);
//     var [Csym,Usym] = useState('');

//     function read(eve){
//         Uname(eve.target.value);
//         Usym(() =>{
//             return(
//                 <CircularProgress color="secondary" className='progress'/>

//             );
//         })
//         // document.getElementById('call');
//     }

//     function click(){
//         // Ubtn(Cname);

//         if(Cname=== ""){
//           alert('Enter Item in list first');
//         }

//         else{          
//         Ubtn((oldarray) => {
//             return [...oldarray,Cname];
//         });

//         Uname('');

//       }

//     }
// function leave(){
//         Usym(() =>{
//      return('');
//     })
 
// }


//     function delete1(id){

//         Ubtn((oldarray) =>{
//            return oldarray.filter((current,index) => {
//                 return index !==id;
//             });

           

//         })

//     }
        
    
//     return (
//     <>
      
//         <div className='ToDo'>
//             <div className='list'>
//                 <h1>ToDo List</h1>
//                 <div className='text1'>
//                     <input type='text' value={Cname} onChange={read} placeholder='Enter an item '/>
//                     <span className='add'>
//                     <Button className="newBtn"  onClick={click} onMouseEnter={leave}> <AddIcon/> </Button>
//                     </span>
//                 <div id='mydiv'>
//                     <h2>{Csym}</h2>
//                 </div>
               
//                 </div>


//                  <ol>    
//                         {/*{Cbtn.map((val)  => {
                            
//                             return(<>
//                             <div className='delBtn'>
//                             <li> {val}</li>
//                             </div>
                            
//                             </>);
                            
//                         })} */}


//                         {Cbtn.map((current,index) =>{
//                             return(<Todo 
//                                value={current}
//                                deleteItms={delete1}
//                                id={index}
//                            />   );                         
//                         })}
//                 </ol>
//                 {/* <Button className='style'><ArchiveIcon/></Button>
//                 <Button><AlarmIcon/></Button>
                
//                  */}
                
               
                
                            
//             </div>

//         </div>
//     </>);
// }

// export default App;



// Cards in Bootstrap 4
// import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


// function App(){
//   return(<>
//       <div className='container'>
//         <h1 className='text-capitalize text-center text-danger my-5'>React in bootstrap baby</h1>
//         <div className='row'>
//           <div className='col-lg-4'>
//             <div class="card" >
//               <img class="card-img-top" src="https://picsum.photos/200/300" alt="Card image" style={{ height:'200px' }}/>
//               <div class="card-body">
//                 <h4 class="card-title">John Doe</h4>
//                 <p class="card-text">Some example text.</p>
//                 <a href="#" class="btn btn-primary">See Profile</a>
//               </div>
//             </div>
//           </div>

//           <div className='col-lg-4'>
//             <div class="card" >
//               <img class="card-img-top" src="https://picsum.photos/200/320" alt="Card image" style={{ height:'200px' }}/>
//               <div class="card-body">
//                 <h4 class="card-title">John Doe</h4>
//                 <p class="card-text">Some example text.</p>
//                 <a href="#" class="btn btn-primary">See Profile</a>
//               </div>
//             </div>
//           </div>

//           <div className='col-lg-4'>
//             <div class="card" >
//               <img class="card-img-top" src="https://picsum.photos/210/300" alt="Card image" style={{ height:'200px' }}/>
//               <div class="card-body">
//                 <h4 class="card-title">John Doe</h4>
//                 <p class="card-text">Some example text.</p>
//                 <a href="#" class="btn btn-primary">See Profile</a>
//               </div>
//             </div>
//           </div>

//       </div>
//     </div>

//   </>);
// }

// export default App;



// google keep app
import React, { useState } from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import SubNote from './SubNote';
import './index.css';


function App(){

    var [Cbtn,Ubtn] = useState([]);

function show(Note){

    Ubtn((oldarray) =>{
        return [...oldarray,Note];
    });

}

function delete1(id){
    Ubtn((oldarray) => {
        return(oldarray.filter((current,index) => {
            return id!==index;
        }));
    }); 
}

    return(<>
            <Header/>

            <CreateNote
                call={show}
            />

           

            {Cbtn.map((current,index) =>{
                return(
                <SubNote 
                    id={index}
                    title={current.title}
                    content={current.content}
                    deleteOne={delete1}
                />);
            })
            }
            <Footer/>
        </>);

}

export default App;






// React awesome SGPA calculator
// import React, { useState } from 'react';
// // import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './index.css';
// import Sgpa from './Sgpa';
// import Simply from './Simply';

// function App(){

//     var [Cname,Uname] = useState({
//         first:'',
//         second:'',
//         third:'',
//         fourth:'',
//         fifth:'',
//         sixth:'',
//         seventh:'',
//         eightth:'',
//         nineth:'',
// 		tenth:'',
// 		eleventh:'',
// 		tweelth:''

//     });

// 	var [CText,UText] = useState('');

//     // function findit(){
//     //     alert('findit 1');
//     //     Uname({
//     //         first:'EEE',
//     //         second:'EM',
//     //         third:'M-1',
//     //         fourth:'EC',
//     //         fifth:'C',
//     //         sixth:'C',
//     //         seventh:'EC',
//     //         eightth:'EEE',
//     //         nineth:'PHYSICS',
//     //         tenth:'ED'
//     //     });

//     // }

//     var name2;
//     function letgo(eve){
//         name2= eve.target.value;


//     }
 
//     function gogo(eve){
//         // alert('cliked');

//         var val= eve.target.value;
        
//         console.log(val);
//         console.log(name2);

//         if(val==='Sem-5' && name2==='IT'){
		
// 			UText('');
// 			Uname({
//             first:'TOC',
//             second:'M4',
//             third:'SE',
//             fourth:'OS',
//             fifth:'DBMS',
//             sixth:'DBMS',
//             seventh:'OS',
//             eightth:'SE',
//             nineth:'CL-3',
//             tenth:'SEM-1'
//             });
//         }

//         else if(val==='Sem-6' && name2==='IT'){
// 			UText('');
	
			
// 			Uname({
//                 first:'DDA',
//                 second:'CN',
//                 third:'CC',
//                 fourth:'ST',
//                 fifth:'DMDW',
//                 sixth:'ST',
//                 seventh:'DDA',
//                 eightth:'CN',
//                 nineth:'CC',
//                 tenth:'SEM-2'
//                 });
// 			}
			

// 	else if(val==='Sem-5' && name2==='MECH'){
// 		UText(() => {
// 			return( <Simply />);
// 		});

// 		Uname({
// 			first:'DDA',
// 			second:'CN',
// 			third:'CC',
// 			fourth:'ST',
// 			fifth:'DMDW',
// 			sixth:'ST',
// 			seventh:'DDA',
// 			eightth:'CN',
// 			nineth:'CC',
// 			tenth:'SEM-2',
// 			eleventh:'mech'

// 			});
// 		}


// 		else if(val==='Sem-6' && name2==='CSE'){
// 			UText(() => {
// 				return( <Simply />);
// 			});
	
// 			Uname({
// 				first:'DDA',
// 				second:'CN',
// 				third:'CC',
// 				fourth:'ST',
// 				fifth:'DMDW',
// 				sixth:'ST',
// 				seventh:'DDA',
// 				eightth:'CN',
// 				nineth:'CC',
// 				tenth:'SEM-2',
// 				eleventh:'CSE',
// 				tweelth:'CES name'
// 				});
// 			}
	
    
    


//     else if(val==='Sem-1'){
		
// 		UText('');

// 		Uname({
//             first:'EEE',
//             second:'EM',
//             third:'M-1',
//             fourth:'EC',
//             fifth:'C',
//             sixth:'C',
//             seventh:'EC',
//             eightth:'EEE',
//         });
//     }

//     else if(val==='Sem-2'){
// 		UText('');

// 		Uname({
//             first:'PHY',
//             second:'ED',
//             third:'M-2',
//             fourth:'C',
//             fifth:'EME',
//             sixth:'C',
//             seventh:'ED',
//             eightth:'PHY',
//             nineth:'EME',
//             tenth:'EC'
//         });
//     }


   


// }
//     function read(){

// 		var f1=document.getElementById("text1").value;
// 		var f2=document.getElementById("text2").value;
// 		var f3=document.getElementById("text3").value;
// 		var f4=document.getElementById("text4").value;
// 		var f5=document.getElementById("text5").value;
// 		var f6=document.getElementById("text6").value;
// 		var f7=document.getElementById("text7").value;
// 		var f8=document.getElementById("text8").value;
// 		var f9=document.getElementById("text9").value;
// 		var f10=document.getElementById("text10").value;

// 		var year=document.getElementById('year').value;
// 		var branch=document.getElementById('branch').value;
		
		
// 		if(f1===' ' || f2===' ' || f3===' ' || f4===' '|| f5===' ' || f6===' '|| f7===' ' || f8===' ' || f9===' '|| f10===' ' || year==='select_year' || branch==='select_branch' )
// 		{
// 			alert('Choose option');
// 		}

//         else{
		
// 		if(f1 == "A+" || f1=="a+")
// 		{
// 			var g=4*10;

// 		}
// 		if(f1 == "A" || f1 == "a")
// 		{
// 			var g=4*9;
// 		}

// 		if(f1 == "B+" || f1 == "b+")
// 		{
// 			var g=4*8;
// 		}
// 		if(f1 == "B" || f1 == "b" )
// 		{
// 			var g=4*7;
// 		}


// 		if(f1 == "C+" || f1 == "c+")
// 		{
// 			var g=4*6;
// 		}

// 		if(f1 == "C" || f1 == "c")
// 		{
// 			var g=4*5;
// 		}

// 		if(f1 == "D" || f1 == "d")
// 		{
// 			var g=4*4;
// 		}

// 		if(f1 == "F" || f1 == "f")
// 		{
// 			var g=4*0;
// 		}


// 		if(f2 == "A+" || f2=="a+")
// 		{
// 			var h=4*10;

// 		}
// 		if(f2 == "A" || f2 == "a")
// 		{
// 			var h=4*9;
// 		}

// 		if(f2 == "B+" || f2 == "b+")
// 		{
// 			var h=4*8;
// 		}
// 		if(f2 == "B" || f2 == "b" )
// 		{
// 			var h=4*7;
// 		}


// 		if(f2 == "C+" || f2 == "c+")
// 		{
// 			var h=4*6;
// 		}

// 		if(f2 == "C" || f2 == "c")
// 		{
// 			var h=4*5;
// 		}

// 		if(f2 == "D" || f2 == "d")
// 		{
// 			var h=4*4;
// 		}

// 		if(f2 == "F" || f2 == "f")
// 		{
// 			var h=4*0;
// 		}


// 		if(f5 == "A+" || f5=="a+")
// 		{
// 			var i=4*10;

// 		}
// 		if(f5 == "A" || f5== "a")
// 		{
// 			var i=4*9;
// 		}

// 		if(f5 == "B+" || f5 == "b+")
// 		{
// 			var i=4*8;
// 		}
// 		if(f5 == "B" || f5 == "b" )
// 		{
// 			var i=4*7;
// 		}


// 		if(f5 == "C+" || f5 == "c+")
// 		{
// 			var i=4*6;
// 		}

// 		if(f5 == "C" || f5 == "c")
// 		{
// 			var i=4*5;
// 		}

// 		if(f5 == "D" || f5 == "d")
// 		{
// 			var i=4*4;
// 		}

// 		if(f5 == "F" || f5 == "f")
// 		{
// 			var i=4*0;
// 		}




// 		if(f3 == "A+" || f3=="a+")
// 		{
// 			var j=3*10;

// 		}
// 		if(f3 == "A" || f3== "a")
// 		{
// 			var j=3*9;
// 		}

// 		if(f3 == "B+" || f3 == "b+")
// 		{
// 			var j=3*8;
// 		}
// 		if(f3 == "B" || f3 == "b" )
// 		{
// 			var j=3*7;
// 		}


// 		if(f3 == "C+" || f3 == "c+")
// 		{
// 			var j=3*6;
// 		}

// 		if(f3 == "C" || f3 == "c")
// 		{
// 			var j=3*5;
// 		}

// 		if(f3 == "D" || f3 == "d")
// 		{
// 			var j=3*4;
// 		}

// 		if(f3 == "F" || f3 == "f")
// 		{
// 			var j=3*0;
// 		}



// 		if(f4 == "A+" || f4=="a+")
// 		{
// 			var k=3*10;

// 		}
// 		if(f4 == "A" || f4== "a")
// 		{
// 			var k=3*9;
// 		}

// 		if(f4 == "B+" || f4 == "b+")
// 		{
// 			var k=3*8;
// 		}
// 		if(f4 == "B" || f4 == "b" )
// 		{
// 			var k=3*7;
// 		}


// 		if(f4 == "C+" || f4 == "c+")
// 		{
// 			var k=3*6;
// 		}

// 		if(f4 == "C" || f4 == "c")
// 		{
// 			var k=3*5;
// 		}

// 		if(f4 == "D" || f4 == "d")
// 		{
// 			var k=3*4;
// 		}

// 		if(f4 == "F" || f4 == "f")
// 		{
// 			var k=3*0;
// 		}



// 		if(f6 == "A+" || f6=="a+")
// 		{
// 			var l=1*10;

// 		}
// 		if(f6 == "A" || f6== "a")
// 		{
// 			var l=1*9;
// 		}

// 		if(f6 == "B+" || f6 == "b+")
// 		{
// 			var l=1*8;
// 		}
// 		if(f6 == "B" || f6 == "b" )
// 		{
// 			var l=1*7;
// 		}


// 		if(f6 == "C+" || f6 == "c+")
// 		{
// 			var l=1*6;
// 		}

// 		if(f6 == "C" || f6 == "c")
// 		{
// 			var l=1*5;
// 		}

// 		if(f6 == "D" || f6 == "d")
// 		{
// 			var l=1*4;
// 		}

// 		if(f6 == "F" || f6 == "f")
// 		{
// 			var l=1*0;
// 		}



// 		if(f7 == "A+" || f7=="a+")
// 		{
// 			var m=1*10;

// 		}
// 		if(f7 == "A" || f7== "a")
// 		{
// 			var m=1*9;
// 		}

// 		if(f7 == "B+" || f7 == "b+")
// 		{
// 			var m=1*8;
// 		}
// 		if(f7 == "B" || f7 == "b" )
// 		{
// 			var m=1*7;
// 		}


// 		if(f7 == "C+" || f7 == "c+")
// 		{
// 			var m=1*6;
// 		}

// 		if(f7 == "C" || f7 == "c")
// 		{
// 			var m=1*5;
// 		}

// 		if(f7 == "D" || f7 == "d")
// 		{
// 			var m=1*4;
// 		}

// 		if(f7 == "F" || f7 == "f")
// 		{
// 			var m=1*0;
// 		}


// 		if(f8 == "A+" || f8=="a+")
// 		{
// 			var n=1*10;

// 		}
// 		if(f8 == "A" || f8== "a")
// 		{
// 			var n=1*9;
// 		}

// 		if(f8 == "B+" || f8 == "b+")
// 		{
// 			var n=1*8;
// 		}
// 		if(f8 == "B" || f8 == "b" )
// 		{
// 			var n=1*7;
// 		}


// 		if(f8 == "C+" || f8 == "c+")
// 		{
// 			var n=1*6;
// 		}

// 		if(f8 == "C" || f8 == "c")
// 		{
// 			var n=1*5;
// 		}

// 		if(f8 == "D" || f8 == "d")
// 		{
// 			var n=1*4;
// 		}

// 		if(f8 == "F" || f8 == "f")
// 		{
// 			var n=1*0;
// 		}


// 		if(f9 == "A+" || f9== "a+")
// 		{
// 			var o=1*9;
// 		}

// 		if(f9 == "A" || f9== "a")
// 		{
// 			var o=1*9;
// 		}

// 		if(f9 == "B+" || f9 == "b+")
// 		{
// 			var o=1*8;
// 		}
// 		if(f9 == "B" || f9 == "b" )
// 		{
// 			var o=1*7;
// 		}


// 		if(f9 == "C+" || f9 == "c+")
// 		{
// 			var o=1*6;
// 		}

// 		if(f9 == "C" || f9 == "c")
// 		{
// 			var o=1*5;
// 		}

// 		if(f9 == "D" || f9 == "d")
// 		{
// 			var o=1*4;
// 		}

// 		if(f9 == "F" || f9 == "f")
// 		{
// 			var o=1*0;
// 		}



// 		if(f10 == "A+" || f10== "a+")
// 		{
// 			var p=1*9;
// 		}

// 		if(f10 == "A" || f10== "a")
// 		{
// 			var p=1*9;
// 		}

// 		if(f10 == "B+" || f10 == "b+")
// 		{
// 			var p=1*8;
// 		}
// 		if(f10 == "B" || f10 == "b" )
// 		{
// 			var p=1*7;
// 		}


// 		if(f10 == "C+" || f10 == "c+")
// 		{
// 			var p=1*6;
// 		}

// 		if(f10 == "C" || f10 == "c")
// 		{
// 			var p=1*5;
// 		}

// 		if(f10 == "D" || f10 == "d")
// 		{
// 			var p=1*4;
// 		}

// 		if(f10 == "F" || f10 == "f")
// 		{
// 			var p=1*0;
// 		}

//         var sum=g+h+i+j+k+l+m+n+o+p;

// 		var result=sum/23;
// 		document.getElementById("demo").innerHTML="Your SGPA="+result+"";

// 		}

//     }






//     return(<>

// <h1 id='demo'/>          

// <div className='ToDo'>   
   
// <div className='list'>


//     <select className='mainSelect' required id='year'>
//         <option value='select_year'>[--Select Year--]</option>
//         <option onClick={gogo} >Sem-1</option>
//         <option onClick={gogo}>Sem-2</option>
//         <option onClick={gogo}>Sem-3</option>
//         <option onClick={gogo}>Sem-4</option>
//         <option onClick={gogo}>Sem-5</option>
//         <option onClick={gogo} >Sem-6</option>
//         <option onClick={gogo} >Sem-7</option>
//         <option onClick={gogo}>Sem-8</option>
//     </select> 

//     <select className='mainBranch' required id='branch'>
//         <option value='select_branch'>[--Select Branch--]</option>
//         <option onClick={letgo} >IT</option>
//         <option onClick={letgo} >CSE</option>
//         <option onClick={letgo}>MECH</option>
//         <option onClick={letgo}>CHEM</option>
//         <option onClick={letgo}>PRODU</option>
//         <option onClick={letgo}>TEXT</option>
//         <option onClick={letgo}>CIVIL</option>
//         <option onClick={letgo}>ELECT</option>
//         <option onClick={letgo}>ELECTRO</option>
//     </select> 

       

// <div className='theory'>
// <h2 class="goheading">Theory Subjects:</h2>


// <label>{Cname.first} </label>
// {/* <input type="text" name="1st" id="text1" required="required"/> */}
// {/* <select  name="1st" id="text1" required="required">
//     <option>A+</option>
//     <option>A</option>
//     <option>B+</option>
//     <option>B</option>
//     <option>C+</option>
//     <option>C</option>
//     <option>D</option>
//     <option>F</option>
// </select>  */}

// <Sgpa 
//    name1="1st"
//     id1="text1"
     
// />


// <label>{Cname.second}</label>
// {/* <input type="text"  name="2nd" id="text2" required="required"/> */}


// <Sgpa 
//    name1="2nd"
//     id1="text2"
     
// />



// <br/>
   
// <label>{Cname.third}</label>
// {/* <input type="text" name="3rd" id="text3" required="required"/> */}
// <Sgpa 
//    name1="3rd"
//     id1="text3"
     
// />


// <label>{Cname.fourth}</label>
// {/* <input type="text"  name="4th" id="text4" required="required"/> */}
// <Sgpa 
//    name1="4th"
//     id1="text4"
     
// />



// <br/>

// <label>{Cname.fifth}</label>
// {/* <input type="text" name="5th" id="text5" required="required"/> */}

// <Sgpa 
//    name1='5th'
//     id1="text5"
     
// />


// </div>




// <div className='pratical'>
// <h2 className="goheading">Practical subject:</h2>
// <label>{Cname.sixth} </label>
// {/* <input type="text" name="7th" id="text7" required="required"/> */}
// <Sgpa 
//    name1="7th"
//     id1="text7"
     
// />


// <label>{Cname.seventh} </label>
// {/* <input type="text"  name="8th" id="text8" required="required"/> */}
// <Sgpa 
//    name1="8th"
//     id1="text8"
     
// />


// <br/>
// <label>{Cname.eightth} </label>
// {/* <input type="text" name="9th" id="text9" required="required"/> */}
// <Sgpa 
//    name1="9th"
//     id1="text9"
     
// />


// <label>{Cname.nineth} </label>
// {/* <input type="text"  name="6th" id="text6" required="required"/> */}

//  <Sgpa 
//     name1="6th" 
//     id1="text6" 
     
// /> 


// <br/>
// <label>{Cname.tenth}</label>
// {/* <input type="text"  name="10th" id="text10" required="required"/> */}
// <Sgpa 
//    name1="10th"
//     id1="text10"
     
// />



// <label>{Cname.eleventh}</label>
// {CText}
// <br/>



// </div>

// </div>

// <button className='showBtn' type='submit' onClick={read}>CALCULATE</button>
// </div>






//     </>);

// }

// export default App;

