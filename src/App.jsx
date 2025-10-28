
import List from "./List.jsx"
function App(){

     const fruits = [{name: "Apple", calories: 60}, 
                    {name: "Orange", calories: 80}, 
                    {name: "Banana", calories: 100}, 
                    {name: "Watermelon", calories: 150}, 
                    {name: "Avocado", calories: 200}]


    return(
        <List items = {fruits} category = "Fruits" />
    )
       
}

export default App
