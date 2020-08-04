// //till template literals

// import React from 'react';
// import ReactDOM from 'react-dom';


// var  flname = 'sahilsingh';
// var lastname= 'jubbal';
// var f= Math.random()*100;
// // ReactDom.render('what to show ', 'where to show');
// //We can use only JS expresions in curly braces {} not JS statements like if,else 
// ReactDOM.render(
//         <> 
//             <h1>My name is = {flname}</h1>
//             <p>My fav number {2 + 6}</p>
//             <h2>This is Random no. generator: {Math.ceil(f) }%</h2>

//             <h1>{`My ${5+5} first name is ${flname} and my last name is : ${lastname}`}</h1>

//         </>,
//         document.getElementById('root')
//         );
    
        

// //CHALLANGE 1
// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(
//   <>
//   <h1>Hello sahilsingh Netfliex JSX challenge</h1>
//   <p> 5 list of series</p>
//   <ol>
//     <li>the first love</li>
//     <li>The family man</li>
//     <li>Dark</li>
//     <li>happy world</li>
//     <li>first live 2</li>
    
//   </ol>
//   </>,
//   document.getElementById('root')

// );


// //CHALLANGE 2

// import React from 'react';
// import ReactDOM from 'react-dom';
// var fname = 'sahilsingh';
// var f= "wow";
// var d= new Date();
// var e= new Date().toLocaleDateString();
// var t= new Date().toLocaleTimeString()

// ReactDOM.render(
//     <>

    
//         {/* <h1>Hello my name is {fname}</h1> */}
//         <h1 contentEditable="true">{`Hello my name ${f} is ${fname}`}</h1> 
        

//         <p>Today date is {d.getDate()+'/'+d.getMonth()+'/'+d.getFullYear()}</p>
//         <p>Time is {d.getHours()+':'+ d.getMinutes()+':'+d.getSeconds()}</p>
//         <hr></hr>

//         <h4>In template lierals</h4>
//         <p>{`today date is ${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`}</p>
//         <p>{`today date is ${d.getHours()}/${d.getMinutes()}/${d.getSeconds()}`}</p>


//         <hr></hr>
//         To more easier way
//         <p class="text-center">Current Date= {e}</p>
//         <p>Current Time= {t}</p>

//         {/* <button class="btn btn-danger ml-5">This is it baby </button> */}

        
//     </>,
//     document.getElementById('root')
// );




//images in jsx and adding css

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// // inline css
// var cssstyle={
//   textAlign: 'center',
//   fontWeight: 'bold',
//   color: 'red',
//   textTransform: 'capitalize',
//   textShadow: '5px 5px 5px violet',
//   marginTop: '30px',
//   marginBottom: '45px'


// }

// var img1='https://picsum.photos/200/300';
// var img2='https://picsum.photos/250/300';
// var img3='https://picsum.photos/300/300';
// var img4='https://picsum.photos/100/300';
// var link='https://google.com';


// ReactDOM.render(
//   <>
//     <h1 contentEditable="true"  className="" style={cssstyle}>Hello sahilsingh Netfliex JSX challenge</h1>
//     <div className="imgdiv">
//         <a href={link} target="_blank">
//         <img src={img1} />
//         </a>
//         <img src={img2}  alt="missing" className="rotate"/>
//         <img src={img3}  alt="missing" className="heartBeat"/>
//     </div>
       

//   </>,
//   document.getElementById('root')    
// );



// // challange 3
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// var cssstyle={  };
// var date= new Date(2020,5,5,20);
// var hours = date.getHours(); 
// var gretting='';

// if(hours >= 6 && hours <=11)
// {
//   gretting = 'Good morning';
//   cssstyle.color = 'green';
// }

// else if(hours >11 && hours <= 18)
// {
//   gretting= 'Good Afternoon';
//   cssstyle.color = 'orange';
// }

// else if((hours >18 && hours <= 23) || (hours ==0))
// {
//   gretting= 'Good Night';
//   cssstyle.color = 'black';
// }

// else{
//   gretting='Still your are awake sir';
//   cssstyle.color = 'grey';
// }

// ReactDOM.render(
//   <>
//   <body>
//     <div className='heading'>
//       <h1>Hello sir,<span style={cssstyle}> {gretting}</span></h1>
//     </div>
//   </body>
//   </>,
//   document.getElementById('root')
// );



// // components in react js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(<App/>,document.getElementById('root') );




// //  multiple exports 
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(<App/>,document.getElementById('root') );


// //multiple exports in react js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import g,{h , show, read ,We} from './App';

// ReactDOM.render(
//   <>
//   <h1>{g}</h1>
//   <ol>
//     <li>{h}</li>
//     <li>{show()}</li>
//     <li>{read()}</li>
//   </ol>

//   <We/>
  
//   </>,
//   document.getElementById('root')
// );


// //simple calculator
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(<App/>,document.getElementById('root') );


// netfliex cards
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';

// ReactDOM.render(
// <>

// <div className='heading'>
// <h1>Netfleix channel</h1>
// </div>
// <App 
//     imgsrc='https://picsum.photos/200/300'
//     // heading='hello sir'
//     category='Horror'
//     title= 'Dark movie'
//     link='https://gmail.com'


// />

// <App
//     imgsrc='https://picsum.photos/250/300'
//     // heading='hello sahilsingh'
//     category='Funny'
//     title= 'Mr. been'
//     link='https://google.com'
// />

// <App
//     imgsrc='https://picsum.photos/300/300'
//     // heading='hello Man'
//     category='Love story'
//     title= 'Hero the one eman army'
//     link='https://www.sublime text.com'
// />

// </>,
// document.getElementById('root') 
// );


// // With sdata imorting
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
// import sdata from './Sdata';

// ReactDOM.render(
//     <>
//         <div className='heading'>
//           <h1>Netfleix Cards</h1>
//         </div>
//         <App 
//             imgsrc={sdata[0].img}
//             catogory={sdata[0].cat}    
//             title={sdata[0].title}
//             link={sdata[0].link}

//         />

//         <App
//             // imgsrc='https://picsum.photos/250/300'
//             // catogory='Funny'    
//             // title='Mr. Been'
//             // link='https://gmail.com'
//             imgsrc={sdata[1].img}
//             catogory={sdata[1].cat}    
//             title={sdata[1].title}
//             link={sdata[1].link}

//         />

//         <App
//             imgsrc={sdata[2].img}
//             catogory={sdata[2].cat}    
//             title={sdata[2].title}
//             link={sdata[2].link}

//         />

//         <App
//             imgsrc={sdata[3].img}
//             catogory={sdata[3].cat}    
//             title={sdata[3].title}
//             link={sdata[3].link}

//         />

//         <App
//             imgsrc={sdata[4].img}
//             catogory={sdata[4].cat}    
//             title={sdata[4].title}
//             link={sdata[4].link}

//         />
//     </>,
//     document.getElementById('root')
// );


// // With Map function , Map function is used for lopping 
// //val is a object which contain all information in sdata and sdata is array and val is object
   
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
// import sdata from './Sdata';

// function ncards(val){                 
//    return(
//     <App 
//         imgsrc={val.img}
//         catogory={val.cat}    
//         title={val.title}
//         link={val.link}
//     />
//     );
// }

// ReactDOM.render(
//     <>
//         <div className='heading'>
//           <h1>Netfleix Cards</h1>
//         </div>
        
//         {sdata.map(ncards)}

//     </>,
//     document.getElementById('root')
// );



// // App2 included
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App2 from './App2';
// import './index.css';


// ReactDOM.render(<App2/>,document.getElementById('root') );


// Slot Mechine
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ComA from './ComA';
import {BrowserRouter } from 'react-router-dom';
import Calculator from './Calculator';
import Whether from './Whether';
import ToCall from './ToCall';
import Polo_gt from './Polo_gt';

ReactDOM.render(
<>
{/* <BrowserRouter>
    <App />
</BrowserRouter> */}
{/* <Calculator /> */}


<BrowserRouter>
    <ToCall />
</BrowserRouter>

{/* <Whether /> */}


</>,
document.getElementById('root') );



