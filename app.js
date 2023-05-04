const countvalue= document.querySelector('#counter');

const increment=()=>{
    // get the value form UI
    let value = parseInt(countvalue.innerText);
    // update the value
    value=  value+1;
    // set the value onto UI
    countvalue.innerText=  value;

}

const decrement=()=>{
    // get the value form UI
    let value = parseInt(countvalue.innerText);
    // update the value
    value=  value-1;
    // set the value onto UI
    countvalue.innerText=  value;
}

const reset=()=>{
    let value= parseInt(countvalue.innerText);
    value=0;
    countvalue.innerText=value;
}