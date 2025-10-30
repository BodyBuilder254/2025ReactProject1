
import React, {useState} from "react";
function Counter(){

    const [count, setCount] = useState(0);

    const increement = ()=>{
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    const decreement = ()=>{
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    const reset = ()=>{
        setCount(0);
    }

    return(
        <div className="container">
            <p className="display">{count}</p>
            <button onClick={decreement} >Decreement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increement}>Increement</button>

        </div>
    );
}
export default Counter;

