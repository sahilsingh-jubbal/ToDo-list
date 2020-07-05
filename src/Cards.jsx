import React from 'react';
import Blue_sea from './images/Blue_sea.jpg';
function Cards(props){
    return(
    <>
            <div className='col-md-4 col-10 mx-auto'>
                <div class="card mt-3">
                    <img src={props.img} class="card-img-top" alt="missing img" style={{ width:'auto', height:'200px' }}/>
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold">{props.title}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>  
            </div>

    </>);
}
export default Cards;