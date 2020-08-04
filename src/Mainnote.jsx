import React,{ useState } from 'react';

function Mainnote(props){

    var [Cname,Uname] = useState({
        title:'',
        details:''
    });

    var [Expand,setExpand] = useState(false);


    function read(eve){
        var value=eve.target.value;
        var name=eve.target.name;
        
        console.log(value);
        Uname((prev) => {
            return{
                ...prev,
                [name]:value
            };
        });
    }

    function click(){
        // alert('cliek');

        if(Cname.title==="" || Cname.details==='')
        {
            alert('Enter data first !!');
        }
        else{
            props.action(Cname);
            Uname({
                title:'',
                details:''
            });
        }

    }
    function openBoth(){
        setExpand(true);
    }

    function backToNormal(){
        setExpand(false);
    }


    return(<><body onDoubleClick={backToNormal}>
            <div className='container mx-auto'>
                <div className='col-lg-6 col-12  mx-auto'>
                    <div className=" my-5">
                        <div className="card-body shadow">
                            
                         
                            <div className="form-group">
                               {Expand?  
                                <input 
                                    type="text"
                                    className="form-control"
                                    id="google1"
                                    onChange={read}
                                    placeholder="TITLE"
                                    name='title'
                                    value={Cname.title}
                                    autoComplete='off'
                                />
                                 :null}
                            </div>
                               

                            <div className="form-group">
                                <textarea
                                    className="form-control"
                                    id='google2'
                                    onChange={read}
                                    placeholder='DETAILS' 
                                    name='details' 
                                    rows="3"
                                    value={Cname.details}
                                    onClick={openBoth}
                                    onDoubleClick={backToNormal}
                                    autoComplete='off'>
                                </textarea>
                            </div>
                        </div>
                    </div>

                    {Expand ?(<button id='add_btn_google' onClick={click} style={{ width:'55px',height:'55px',fontSize:'25px',fontWeight:'bold' }} className='btn btn-warning text-light rounded-circle'>+</button>) 
                    : null }
                    
                </div>
                {/* <h1>{Cname.title}</h1>
                <h1>{Cname.details}</h1> */}
            </div>
        </body></>)
    }
export default Mainnote;
