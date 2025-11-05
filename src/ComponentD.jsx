
import React, {useContext} from "react";
import { userContext } from "./ComponentA.jsx";

function ComponentD(){

    const user = useContext(userContext);
    return(
        <div className="box">
            <h1>Component D</h1>
            <h1>{`Hello ${user} `} </h1>
        </div>
    );
}
export default ComponentD;
