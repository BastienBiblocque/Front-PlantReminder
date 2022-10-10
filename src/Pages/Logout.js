import React, {useEffect} from "react";

import Loader from "../Components/Loader";
import {useNavigate} from "react-router-dom";

function Logout() {
    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            sessionStorage.clear();
            navigate('/')
        },2000)
    },[])

    return (
        <>
            <Loader type="triangle"/>
        </>
    );
}

export default Logout;
