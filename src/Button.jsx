
function Button(){
     let count  = 0;
    const handleClick = (event) => event.target.textContent = "Clicked";

    return(
        <button onDoubleClick={(event) => handleClick(event)} >Click Me 😊</button>
    )
}
export default Button

// BUTTON INITIAL VERSION
// function Button(){
//     const styles = {
//         backgroundColor: "blue",
//         color: "white",
//         padding: "20px 40px",
//         border: "none",
//         borderRadius: "10px",
//         cursor: "pointer",
//         fontSize: "2rem",
//                 }
//     return(
//         <button style={styles}>Click Me</button>
//     );
// }

// export default Button
