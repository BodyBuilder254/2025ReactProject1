 
 import React, {useState, useEffect} from "react";
 function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date());
        }, 1000);

        document.title = "DigitalClock";
        console.log("Title setup on mount");

        return ()=>{
            clearInterval(intervalId);
        }
  
    }, []);
    
    function formatTime(){

        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();

        const meridiems = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;

        hours = String(hours).padStart(2, 0);
        minutes = String(minutes).padStart(2, 0);
        seconds = String(seconds).padStart(2, 0);

        return `${hours}:${minutes}:${seconds} ${meridiems}`;

    }

    return(
        <div className="clockContainer">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>

        </div>
    );
 }

 export default DigitalClock;
