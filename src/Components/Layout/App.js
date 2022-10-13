import '../../App.css';
import React, {useEffect, useState} from "react";
import {NotificationContainer} from "react-notifications";
import 'react-notifications/lib/notifications.css';
import {Outlet, useNavigate} from "react-router-dom";
import UserData from "../../Utils/UserData";
import Navbar from "../Navbar";

function AppLayout() {

    const navigate = useNavigate();

    const [isLog, setIsLog] = useState(null);
    const [userData, setUserData] = useState(null);

    useEffect(()=>{
        if (isLog === false) {
            navigate('/login');
        }
    },[isLog])

    return (
        <div className="grid min-h-screen ">
            <UserData setIsLog={setIsLog} setUserData={setUserData}/>
            <NotificationContainer/>
            <Navbar userData={userData} />
            <div className="w-screen h-screen fixed bottom-0">
                <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#75a083" fillOpacity="1" d="M0,32L80,58.7C160,85,320,139,480,160C640,181,800,171,960,149.3C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div>
            <Outlet />
        </div>
    );
}

export default AppLayout;
