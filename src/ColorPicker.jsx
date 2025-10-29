 
 import React, {useState} from "react";
 function ColorPicker(){
    const [color, setColor] = useState("#000");
    return(
        <div className="container">
            <h1>Color Picker</h1>
            <div className="display" style={{backgroundColor: color}}></div>
        </div>
    );
 }
 export default ColorPicker;
