import '../../App.css';
import React from "react";
import login from '../../Image/png/login.svg';
import {Link, Outlet} from "react-router-dom";

function LoginLayout() {

    return (
        <div className="grid place-items-center h-screen">
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
