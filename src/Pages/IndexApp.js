import React, {useEffect, useState} from "react";
import FlowerCard from "../Components/FlowerCard";
import Button from "../Components/Button";
import AddFlowerModal from "../Components/Modal/AddFlower";
import axios from "axios";
import UserData from "../Utils/UserData";
import {NotificationManager} from "react-notifications";
import Loader from "../Components/Loader";
function IndexApp() {
        const [changeMade, setChangeMade] = React.useState(false);

    const [isLog, setIsLog] = useState(null);
    const [userData, setUserData] = useState(null);

    const [flowers, setFlowers] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    async function getUsersFlowers() {
        setIsLoading(true);
        await axios.get(`${process.env.REACT_APP_API_URL}/user/plantes`,  {
            headers: {
                Authorization: "Bearer " + userData.jwt
            }
        })
            .then((response) => {
                throwGetFlowerSuccess(response);
            })
            .catch(() => {
                throwApiError();
            })
    }

    function throwGetFlowerSuccess(response)
    {
        setFlowers(response.data);
        setIsLoading(false);
    }

    function throwApiError(){
        setIsLoading(false);
        NotificationManager.error("Erreur.");
    }

    useEffect(()=>{
        if (changeMade)
            getUsersFlowers().then(r => setChangeMade(false));
    },[changeMade]);

    useEffect(()=>{
        if (userData)
            getUsersFlowers().then();
    },[userData]);

    return (
        <div className="flex">
            <UserData setIsLog={setIsLog} setUserData={setUserData}/>
            {isLoading ?
                    <Loader type="triangle"/>
                : (
                    <div className="pt-16 space-y-4 gap-4 w-full px-4 md:grid md:grid-cols-2 md:space-y-0 z-20 pb-16">
                        <div className="col-span-2 w-full grid">
                            <label htmlFor="my-modal-4" className="btn btn-primary justify-self-center md:justify-self-start">Ajouter une fleur</label>
                        </div>
                        {flowers ? (
                            flowers.map((flower, index) => (
                                    <FlowerCard key={index} flower={flower} />
                                ))):null}
                    </div>
                ) }
            <AddFlowerModal setChangeMade={setChangeMade}/>
        </div>
    );
}

export default IndexApp;
