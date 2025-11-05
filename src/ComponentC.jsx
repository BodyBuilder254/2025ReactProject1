
import ComponentD from "./ComponentD.jsx";

import React, {useContext} from "react";
import { userContext } from "./ComponentA.jsx";

function ComponentC(){

    const user = useContext(userContext);
    return(
        <div className="box">
            <h1>Component C</h1>
            <h1>{`Morning ${user}`} </h1>
            <ComponentD  />
        </div>
    );
}
export default ComponentC;
