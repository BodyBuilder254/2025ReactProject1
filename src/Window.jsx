
import React, {useState, useEffect} from "react";
function Window(){

    const [width, setWidth]  = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize", handleResize);
        console.log("Event Listener Added");

        return()=>{
            window.removeEventListener("resize", handleResize);
            console.log("Event Listener Removed");
        }

    }, []);

    useEffect(()=>{
        document.title = `Size: ${width} * ${height}`;
    }, [width, height]);

    
    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        
    }

    return(
        <div>
            <p>Width: {width} px </p>
            <p>Height: {height} px </p>
        </div>
    );
}

export default Window;