// // `` and ${} is called templates literals
// import React from 'react';
// function Sresult(props){
//     var img= `https://source.unsplash.com/400x300/?${props.name}`;
//     return(
//     <>
//         <div className='imgStyle'>
//             <img src={img} />
//         </div>
//     </>);
// }
// export default Sresult;




import React from 'react';
function Sresult(props){
    console.log('Sresult works baby');
    var img=`https://source.unsplash.com/500x400/?${props.value}`;
    return(<>
        {/* <h1>{props.value}</h1> */}
        <div className='container mx-auto'>
        <img src={img} alt='missing image' className='mt-5 mr-1 img-fluid'/>
        </div>
    </>);
}
export default Sresult;