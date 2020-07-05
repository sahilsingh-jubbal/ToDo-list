// import React from 'react';
// function Contact(){
//     return(<h1>Hi I am Contact page</h1>);
// }
// export default Contact;


// import React from 'react';

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


// function Contact(){
//     return(
//     <>
//         <div className='container'>
//             <div class="alert alert-primary text-capitalize" style={{display:'flex', flexDirection:'row'}} role="alert">
//                 <h1 className='display-4 text-center' style={{fontSize:'30px', textAlign:"center"}}>This is Contact page</h1>
                
//                 <svg width="1em" height="1em" style={{fontSize:'30px'}} viewBox="0 0 16 16" class="bi bi-telephone-inbound-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                     <path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.471 17.471 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0z"/>
//                 </svg>
//             </div>
      

//             <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
//   <ol class="carousel-indicators">
//     <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
//     <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
//     <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
//   </ol>
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img src="https://picsum.photos/1200/900" class="d-block w-100" alt="..."/>
//       <div class="carousel-caption d-none d-md-block">
//         <h5>First slide label</h5>
//         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//       </div>
//     </div>
//     <div class="carousel-item">
//       <img src="https://picsum.photos/1200/950" class="d-block w-100" alt="..." />
//       <div class="carousel-caption d-none d-md-block">
//         <h5>Second slide label</h5>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//       </div>
//     </div>
//     <div class="carousel-item">
//       <img src="https://picsum.photos/1200/900" class="d-block w-100" alt="..." />
//       <div class="carousel-caption d-none d-md-block">
//         <h5>Third slide label</h5>
//         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//       </div>
//     </div>
//   </div>
//   <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="sr-only">Previous</span>
//   </a>
//   <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="sr-only">Next</span>
//   </a>
// </div>




        




//         </div>
//     </>);
// }
// export default Contact;





import React, { useState } from 'react';
function Contact(){

    var [Cname,Uname] = useState({
        fname:'',
        lname:'',
        mobile:'',
        email:'',
        address:''
    });

    var [Cbtn,Ubtn] = useState({});
    console.log('this is Cbtn',Cbtn);

    function read(eve){
        var value=eve.target.value;
        var name=eve.target.name;
        // console.log(value," ",name);

        Uname((oldarray) => {
            return{
                ...oldarray,
                [name]:value
            };
        });
    }

    function submitDate(){
        Ubtn(Cname);
        alert(`Hello my name is ${Cname.fname}, my last name is ${Cname.lname}, my mobile number is ${Cname.mobile}, and my address is ${Cname.address}`);
        
    }
    
    return(<>
    <div className='container mt-5'>
        <h1 className='text-center'>Contact Us</h1>
        <hr className='w-25 mx-auto'></hr>
    </div>

    <div className='container'>
        <div className='col-lg-8 col-md-8 col-12 mx-auto'>

        {/* <h3>{Cbtn.fname}</h3>
        <h3>{Cbtn.lname}</h3>
        <h3>{Cbtn.mobile}</h3>
        <h3>{Cbtn.email}</h3>
        <h3>{Cbtn.address}</h3>  */}
        

            <form  className='mb-5'>
                <div className="form-group">
                    <label for="exampleFormControlInput1 text-capitalize">Enter name</label>
                    <input type="text" className="form-control" name='fname'  onChange={read}  id="exampleFormControlInput1" placeholder="Enter Your Name" />
                </div>
                
                <div className="form-group">
                    <label for="exampleFormControlInput1 text-capitalize">Enter LastName</label>
                    <input type="text" className="form-control" name='lname' onChange={read} id="exampleFormControlInput1" placeholder="Enter Your LastName" />
                </div>

                <div className="form-group">
                    <label for="exampleFormControlInput1 text-capitalize">Enter mobile Number</label>
                    <input type='number' className="form-control" name='mobile' onChange={read} id="exampleFormControlInput1" placeholder="Enter Your Mobile number" />
                </div>

                <div className="form-group">
                    <label for="exampleFormControlInput1 text-capitalize">Enter Email id</label>
                    <input type='email' className="form-control" name='email' onChange={read} id="exampleFormControlInput1" placeholder="Enter Your Email id" />
                </div>
                

                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Enter Address</label>
                    <textarea className="form-control" name='address' onChange={read} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <input type='button' value='Submit' onClick={submitDate} style={{ fontSize:'18px', width:'110px' }} className='btn btn-outline-info'/>
            </form>
        </div>
    </div>
    </>);
}
export default Contact;