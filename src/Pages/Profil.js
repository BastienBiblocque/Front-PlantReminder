import React, {useEffect, useState} from "react";
import UserData from "../Utils/UserData";
import profil from "../Image/svg/profil.svg";
import ProfilForm from "../Components/ProfilForm";
import Loader from "../Components/Loader";

function Profil() {

    const [userData, setUserData] = useState(null);
    const [isLog, setIsLog] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        if (userData)
            setIsLoading(false);
    },[userData]);

    return (
        <div className="flex w-full">
            <UserData setIsLog={setIsLog} setUserData={setUserData}/>
            <div className="card card-compact bg-base-100 shadow-xl max-w-sm mx-auto">
                <img src={profil} className="px-4 pt-4"/>
                <div className="card-body">
                    {isLoading ? (
                        <Loader/>
                    ) : (
                        <ProfilForm userData={userData}/>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Profil;
