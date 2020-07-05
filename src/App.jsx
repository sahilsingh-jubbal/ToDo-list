// toDo list second using matrial Ui
// import React, { useState } from 'react';
// import './index.css';
// import Todo from './ToDo';
// import AddIcon from '@material-ui/icons/Add';
// import Button from '@material-ui/core/Button';
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

// google keep app
// import React, { useState } from 'react';
// import Button from '@material-ui/core/Button';
// import AddIcon from '@material-ui/icons/Add';
// import DeleteIcon from '@material-ui/icons/Delete';
// import Header from './Header';
// import Footer from './Footer';
// import CreateNote from './CreateNote';
// import SubNote from './SubNote';
// import './index.css';


// function App(){

//     var [Cbtn,Ubtn] = useState([]);

// function show(Note){

//     Ubtn((oldarray) =>{
//         return [...oldarray,Note];
//     });

// }

// function delete1(id){
//     Ubtn((oldarray) => {
//         return(oldarray.filter((current,index) => {
//             return id!==index;
//         }));
//     }); 
// }

//     return(<>
//             <Header/>

//             <CreateNote
//                 call={show}
//             />

           

//             {Cbtn.map((current,index) =>{
//                 return(
//                 <SubNote 
//                     id={index}
//                     title={current.title}
//                     content={current.content}
//                     deleteOne={delete1}
//                 />);
//             })
//             }
//             <Footer/>
//         </>);

// }

// export default App;




// context Api and useContext
// import React, { createContext } from 'react';
// import ComA from './ComA';

// var FirstName = createContext();
// var LastName = createContext();

// function App(){
//     return(
//     <>
//     <FirstName.Provider value='sahilsingh'>
//         <LastName.Provider value='jubbal'>
//             <ComA />
//         </LastName.Provider>
//     </FirstName.Provider>
//     </>);
// }

// export default App;
// export {FirstName, LastName};




//useEffect in react js
// import React, { useState, useEffect } from 'react';

// function App(){

//     var [Cname,Uname] = useState(0);
//     var [num,setNum] = useState(0);
    

//     function read(){
//         Uname(Cname+1);
//         //alert('I am clicked');
//     }
//     function accept(){
//         setNum(num+1);
//     }

//     useEffect(() =>{
//         alert('I am clicked');
//         console.log('I am clicked after alert');
//     },[Cname]);

//     return(
//     <>
//         <button onClick={read}>Click Me {Cname}</button><br/><br/>
//         <button onClick={accept}>Click Me {num}</button>
//     </>
//     );
// }

// export default App;



// challange 7
// import React, { useState, useEffect } from 'react';

// function App(){
//     var [Cname,Uname] = useState(0);
    
//     function read(){
//         Uname(Cname+1);
//     }

//     useEffect(() =>{
//         // alert('thisis clickec');
//         document.title=`you clicked here ${Cname} times`; 

//     },[Cname]);

//     return(
//     <>
//         <button onClick={read}>Click Me {Cname}</button>
//     </>
//     );
// }
// export default App;


// import React from 'react';
// import { Route, Switch} from 'react-router-dom';
// import About from './About';
// import Contact from './Contact';
// import Error from './Error';
// import Menu from './Menu';
// function App(){
//     function Name(){
//         return(<h1>Hello i am Name page</h1>);
//     }
//     return(
//     <>
//         <Menu />
//         <Switch>
//             <Route exact path='/' component={About}/>
//             <Route exact path='/about' component={About}/>
//             <Route exact path='/contact' component={Contact}/>
//             <Route path='/contact/name' component={Name}/>
//             <Route component={Error}/>
//         </Switch>
      
//     </>
//     );
// }
// export default App;


// React router Dom in react js and useParms and Live image search
// import React from 'react';
// import {Route , Switch} from 'react-router-dom';
// import About from './About';
// import Contact from './Contact';
// import Error from './Error';
// import Menu from './Menu';
// import Seafloor from './images/Seafloor.jpg';
// import './index.css';
// import User from './User';
// import Search from './Search';

// function App(){
//     function Name(){
//         return(<h1>Hello I am name page</h1>);
//     }

//     function Services(){
//         return(
//             <>
//                 <div className='container'>
//                 <div class="alert alert-warning" role="alert">
//                     <h1 className='text-center' id='services'>Hello I am service page</h1>
//                 </div>
//                     <img src={Seafloor} class="d-block w-100 img-fluid" style={{height:'60vh'}} alt="..."/>
//                 </div>
//             </> );

//     }


//     return(<>
//         <Menu/>
//         <Switch>
//             <Route exact path='/' component={About}/>
//             {/* <Route path='/About' component={() =>  <About name='About Page'/> } /> */}
//             <Route path='/about' component={About}/>
//             <Route exact path='/contact' component={Contact}/>
//             <Route path='/contact/name' component={Name}/>
//             <Route path='/search' component={Search}/>
//             <Route path='/user/:fname/:lname' component={User}/>
//             <Route path='/services' component={Services}/>
            
//             <Route component={Error}/>
            
//         </Switch>
//     </>);
// }
// export default App;




// Responsive React js Website
import React from 'react';
import {Route , Switch, Redirect} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Services from './Services';
import Navbar from './Navbar';
import Search from './Search';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import List2 from "./List2";




function App(){

        return(
        <>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/search' component={Search}/>
                <Route path='/services' component={Services}/>
                <Route path='/todo_list' component={List2}/>
                
                <Redirect to='/' /> 
                
            </Switch>
        </>
        );
}
export default App;



