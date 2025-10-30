
import MyComponent from "./MyComponent.jsx";

function App(){
    console.log("App rendered");


    return(
        <MyComponent/>
    )
}

export default App

// LIST COMPONENT
// import List from "./List.jsx"
// function App(){

//     const fruits = [{name: "Apple", calories: 60}, 
//                     {name: "Orange", calories: 80}, 
//                     {name: "Banana", calories: 100}, 
//                     {name: "Watermelon", calories: 150}, 
//                     {name: "Avocado", calories: 200}];
    
//     const vegetables = [{name: "Cabbage", calories: 150},
//                         {name: "Kales", calories: 100},
//                         {name: "Spinatch", calories: 50},
//                         {name: "Tomatoes", calories: 200},
//                         {name: "Carrots", calories: 170}];               


//     return(
//         <>
//             {fruits.length > 0 && <List items = {fruits} category = "Fruits" />}
//             {vegetables.length > 0 && <List items = {vegetables} category = "Vegetables"/>}
//         </>
//     )
       
// }

// export default App
