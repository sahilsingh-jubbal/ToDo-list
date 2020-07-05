// useParms and UseLocation and UseHistroy
import React from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';

function User(){
    var { fname,lname } = useParams();
    var location= useLocation();
    var history= useHistory();

    // console.log(history);
    
    function read(){
        // alert('You are Awesome sahilsingh');
        // history.goBack();
        history.push('/');
    }
    return(<>
        <h1>user {fname} {lname} page</h1>
        <p><b>You are on this page:</b> {location.pathname}</p>

        {location.pathname === `/user/sahilsingh/jubbal` ?
            <button  onClick={read}>Homepage</button> 
         : null }

    </>);

}
export default User;