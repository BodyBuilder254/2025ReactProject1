
import PropTypes from "prop-types"
function Student({name = "Guest",age = 18, isStudent = true}){

    return(
        <div className="student">
            <p>Name: {name}</p>
            <p>Age: {age} Years</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
        </div>
    );

}
Student.prototype = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}
export default Student
