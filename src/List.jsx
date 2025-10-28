
function List({items, category}){
   
    // fruits.sort((a,b) => a.name.localeCompare(b.name)) // SALPHABETICAL ORDER
    //  fruits.sort((a,b ) => b.name.localeCompare(a.name))   // REVERSE ORDER
    
    // fruits.sort((a, b) => a.calories - b.calories)      //NUMERIC
    // fruits.sort((a, b) => b.calories - a.calories)          //REVERSE NUMERIC
    
    // const lowCalFruits = fruits.filter(fruit => fruit.calories <= 100);
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
    
    const itemList = items;
    const listItems = itemList.map((item, index) =>
        <li key={index}>{item.name}  :  <b>{item.calories}</b> </li>
    );
    return(
        <>
            <h3>{category}</h3>
            <ol>{listItems} </ol>
        </>
    );
}

export default List
