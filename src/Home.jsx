import React from 'react';
import Seas from './images/Seas.jpg';
import { NavLink } from 'react-router-dom';
import Common from './Common';

function Home(){
    return(<>


    <Common 
            name='Grow Your Business With '
            btname='Get started'
            visit='/services'
            img={Seas}
            para='We are encouraging the team of talent for web development'
        />
    </>);

}
export default Home;