import React, {useContext} from "react";
import UserContext from "../context/UserContext";  ///UserContext madhlya value fetch karnyasthi useContext cha wapar hoto

function Profile(){
    const {user} = useContext(UserContext);

    if(!user){
        return <div>Please Login</div>
    }
    else 
    {
        return <div>Welcome {user.username} </div>
    }
}

export default Profile