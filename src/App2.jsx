import React from 'react';
import App from './App';
import sdata from './Sdata';

function ncards(val){                 
   return(
    <App 
        imgsrc={val.img}
        catogory={val.cat}    
        title={val.title}
        link={val.link}
    />
    );
}

function App2(){
    return(
    <>
        <div className='heading'>
          <h1>Netfleix Cards</h1>
        </div>
        
        {sdata.map(ncards)}

    </>
    );
}

export default App2;
