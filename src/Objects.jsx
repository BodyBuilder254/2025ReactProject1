
import { element } from "prop-types";
import React, {useState} from "react";
function Objects(){

    const [cars, setCars] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");

    function addCar(){
        const newCar = {year: year, make: make, model: model};
        setCars(c => [...c, newCar]);
        setYear(new Date().getFullYear());
        setMake("");
        setModel("");
    }
    function removeCar(index){
        setCars(c => c.filter((_, i) => i !== index));
    }
    function handleYear(event){
        setYear(event.target.value);
    }
    function handleMake(event){
        setMake(event.target.value);
    }
    function handleModel(event){
        setModel(event.target.value);
    }

    return(
        <div>
            <h2>List of Cars Objects</h2>
            <ul>
                {cars.map((car, index) => <li key={index} onClick={() => removeCar(index)} >{car.year} {car.make} {car.model} </li>)}
            </ul>

            <input type="number" value={year} onChange={handleYear} /><br/>
            <input type="text" value={make} onChange={handleMake} placeholder="Enter Car Make" /><br/>
            <input type="text" value={model} onChange={handleModel} placeholder="Enter Car Model" /><br/>
            <button onClick={addCar} >Add Car</button>
        </div>
    );
}
export default Objects;
