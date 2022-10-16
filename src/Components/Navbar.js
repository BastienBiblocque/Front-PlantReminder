import '../App.css';
import React from "react";
import {useNavigate} from "react-router-dom";

function Navbar(props) {
    const navigate = useNavigate();

    return (
        <>
            <div className="navbar bg-base-100 fixed top-0 z-50">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl text-primary" onClick={()=>{navigate('/app')}}>Plant Reminder</a>
                </div>
                <div className="flex-none">
                    {props.userData ? (
                        <div className="text-primary pr-4 select-none sm:block hidden">{props.userData.name} {props.userData.firstName}</div>
                    ) :null}
                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people"/>
                            </div>
                        </label>
                        <ul tabIndex="0"
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between" onClick={()=>{navigate('/app/profil')}}>
                                    Profil
                                </a>
                            </li>
                            <li><a onClick={()=>{navigate('/app/logout')}}>Déconnexion</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Navbar;
