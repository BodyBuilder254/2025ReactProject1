
function Food(){

    const food1 = "Ugali";
    const food2 = "Beef";

    return(
        <ul>
            <li>Sukuma Wiki</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food
