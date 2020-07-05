import React, { useContext } from 'react';
import {FirstName, LastName} from './App';

function ComC(){
    var fname = useContext(FirstName);
    var lname = useContext(LastName);
    return(
        <>
            {/* <FirstName.Consumer>
                {(fname) => {
                    return(
                        <LastName.Consumer>
                        {(lname) => {
                            return(<>
                            <h1>my name is {fname} {lname}</h1>
                            </>);
                        }}    
                        </LastName.Consumer>
                    );
                }}
            </FirstName.Consumer> */}

            <h1>my first name is {fname} and my last name is {lname}</h1>
        </>
    );
}
export default ComC;