import React from 'react';

function add(a,b){
    var c= a+b;
    return (c);
}

function sub(a,b){
    return (a-b);
}

function mul(a,b){
    return (a*b);
}

function div(a,b){
    var d =  a/b;
    d=d.toFixed(2);
    return (d);
}

export default add;
export {sub, mul , div};
