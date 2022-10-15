import React, {useEffect} from "react";

import Loader from "../Components/Loader";
import {useNavigate} from "react-router-dom";

function Logout() {
    const navigate = useNavigate();

    useEffect(()=>{
        logout()
    },[])

    function logout() {
        sessionStorage.clear();
        navigate('/')
    }

    return (
        <></>
    );
}

export default Logout;
