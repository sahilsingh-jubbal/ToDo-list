import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Footer(){
var year=new Date().getFullYear(); 
return(<>

<div className='footer1'>
<footer>
    <p>Copyright @ {year}</p>
</footer>
</div>
</>);
    
}
export default Footer;