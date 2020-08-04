import React from 'react';
import Blue_sea from './images/Blue_sea.jpg';
import Cards from './Cards';
import sdata from './Sdata';
import Footer2 from './Footer2';
function Service(){
    return(
    <>
<body className='' id='body_services' style={{border:'0.5px solid white'}}>
            <div className='container my-5'>
                 <div className='row'>
                           {/* { */}
                               {/* sdata.map((val,index) => { */}
                                    {/* var img= sdata[index].img;
                                    var title= sdata[index].title;
                                    return(
                                    <Cards img={img} title={title}/>) */}

                                    {/* return(<Cards img={val.img} title={val.title}/>) */}
                               {/* }) */}
                           {/* } */}

 
                           {/* {
                               sdata.map((val,index) => {
                                    return <Cards img={val.img} title={val.title}/>
                               })
                           } */}

                           {
                                sdata.map((current,index) => {
                                        return(<Cards img={current.img} title={current.title}/>)
                                })
                           }
                           </div>
                    </div>
            
            {/* <div className='container'>
                <div className='row'>
                    <div className='col-md-4 col-12 mt-3'>
                            <Cards />
                    </div>

                    <div className='col-md-4 col-12 mt-3'>
                            <Cards />
                    </div>
                    <div className='col-md-4 col-12 mt-3'>
                            <Cards />
                    </div>
                    <div className='col-md-4 col-12 mt-3'>
                            <Cards />
                    </div>
                    <div className='col-md-4 col-12 mt-3'>
                            <Cards />
                    </div>
                    <div className='col-md-4 col-12 mt-3'>
                            <Cards />
                    </div>
                </div>
            </div> */}
        

            <Footer2/>
</body>
    


    </>);
}
export default Service;