
// useEffect(()= {}); On mount and every re render
// useEffect(( => {}, [])); on mount only
// useEffect(()=> {}, [value]); on mount plus when value changes

import React, {useState, useEffect} from "react";
function UseEffect(){

    const [count, setCount] = useState(0);
    const [Colour, setColour] = useState("green");

    function addCount(){
        setCount(c => c + 1);
    }
    function substractCount(){
        setCount(c => c - 1);
    }
    function changeColour(){
        setColour(c => c === "green" ? "red" : "green");
    }

    useEffect(()=>{document.title = `Count: ${count} ${Colour}`}, [count, Colour]);
    return(
        <div>
            <p style={{color: Colour}} >Count: {count}</p>
            <button onClick={addCount} >Add</button>
            <button onClick={substractCount} >Substract</button><br />
            <button onClick={changeColour} >Change Colour</button>
        </div>
    );
}
export default UseEffect;
