
import profilePic from "./assets/Profile.jpg"
function Card(){
    return(
        <div className="Card">
            <img className="image" src= {profilePic} alt="Profile Picture"></img>
            <h2 className="title">Samuel Kimathi</h2>
            <p className="text">Am a Student</p>
        </div>
    );
}

export default Card