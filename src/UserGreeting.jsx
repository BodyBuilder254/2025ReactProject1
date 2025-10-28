
import PropTypes from "prop-types";

function UserGreeting({isLoggedin = false,userName = "Guest" }){
    const welcomeMsg = <h2 className="welcomeMsg">Welcome {userName}</h2>;
    const loginPrompt = <h2 className="loginPrompt">Please log in to continue</h2>;
    
    return(isLoggedin ?  welcomeMsg : loginPrompt) ; 
                            
}

UserGreeting.propTypes = {
    userName: PropTypes.string,
    isLoggedin: PropTypes.bool
}

export default UserGreeting