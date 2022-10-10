import '../../App.css';
import React from "react";
import login from '../../Image/png/login.svg';
import {Outlet} from "react-router-dom";
import {NotificationContainer} from "react-notifications";
import 'react-notifications/lib/notifications.css';

function LoginLayout() {

    return (
        <div className="grid place-items-center h-screen">
            <NotificationContainer/>
            <div className="w-screen h-screen absolute">
                <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#75a083" fill-opacity="1" d="M0,32L80,58.7C160,85,320,139,480,160C640,181,800,171,960,149.3C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl max-w-sm mx-4 md:mx-0">
                <img src={login} alt="Shoes" className="px-4 pt-4"/>
                <div className="card-body">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default LoginLayout;
