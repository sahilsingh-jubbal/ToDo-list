import React from 'react';
import Blue_sea from './images/Blue_sea.jpg';
import Cards from './Cards';
import sdata from './Sdata';
function Service(){
    return(
    <>

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

 
                           {
                               sdata.map((val,index) => {
                                    return <Cards img={val.img} title={val.title}/>
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
        


    


    </>);
}
export default Service;