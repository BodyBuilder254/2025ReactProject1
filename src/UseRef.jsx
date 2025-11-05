
import React, {useState, useEffect, useRef} from "react";

function UseRef(){

    // let [number, setNumber] = useState(0);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(()=>{
        console.log("Component Rendered ");
    });

    function handleClick1(){
        // setNumber(n => n + 2);
        // ref.current+=2;
        console.log(inputRef1.current.value);
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef1.current.style.color = "red";
    }
    function handleClick2(){

        inputRef2.current.focus();
        inputRef2.current.style.color = "red";
        inputRef2.current.style.backgroundColor = "yellow";
    }

    function handleClick3(){
        inputRef3.current.focus();
        inputRef3.current.style.color = "red";
        inputRef3.current.style.backgroundColor = "yellow";
    }
    return(
        <div>
            <button onClick={handleClick1} >Click Me 1!</button><br/>
            <input ref={inputRef1} /> <br/>

            <button onClick={handleClick2} >Click Me 2!</button><br/>
            <input ref={inputRef2} /><br />

            <button onClick={handleClick3} >Click Me 3!</button><br/>
            <input ref={inputRef3} />

        </div>
    );
}
export default UseRef;

