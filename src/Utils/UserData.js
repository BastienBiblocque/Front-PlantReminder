import React, {useEffect} from "react";

function UserData(props) {
    useEffect(()=>{
        const dataString = sessionStorage.getItem('userData');
        if (!dataString) {
            props.setIsLog(false);
        } else {
            props.setUserData(JSON.parse(dataString));
            props.setIsLog(true);
        }
    },[])
    return null;
}

export default UserData;
