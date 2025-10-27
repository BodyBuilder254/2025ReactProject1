
import Student from "./Student"
function App(){
    return(
        <>
            <Student name = "Samuel Kimathi" age = "23" isStudent = {false}/>
            <Student name = "Alex Muchui" age = {20} isStudent = {true} />
            <Student name = "Brenda Nkirote" age = {15} isStudent = {true} />
        </>
    );
       
}

export default App
