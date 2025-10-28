
import PropTypes from "prop-types";

function List({items = [], category = "Category"}){
   
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
            <h3 className="category">{category}</h3>
            <ol className="items">{listItems} </ol>
        </>
    );
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        calories: PropTypes.number
    }))
}

export default List
