import React, {useEffect, useState} from "react";
import Loader from "../Components/Loader";
import UserData from "../Utils/UserData";
import {useNavigate} from "react-router-dom";

function IndexLogin() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);

    const [isLog, setIsLog] = useState(null);

    const [userData, setUserData] = useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            if (userData) {
                navigate('/app');
            }
            if (isLog === false) {
                navigate('/login');
            }
        },2000)
    },[userData, isLog])

    return (
        <>
            <UserData setIsLog={setIsLog} setUserData={setUserData}/>
            {isLoading ?(
            <div className="mx-auto">
                <Loader type="triangle"/>
            </div>)
          :null}</>
    );
}

export default IndexLogin;
