import React, {useState} from "react";
import Button from "./Button";
import Input from "./Input";
import axios from "axios";
import {NotificationManager} from "react-notifications";
import jwt_decode from "jwt-decode";
import {useNavigate} from "react-router-dom";

function ProfilForm(props) {
    const navigate = useNavigate();

    const [name, setName] = useState(props.userData.name);
    const [firstName, setFirstName] = useState(props.userData.firstName);
    const [email, setEmail] = useState(props.userData.email);

    const [isLoading, setIsLoading] = useState(false);

    const updateProfil = async () => {
        setIsLoading(true);
        if (email.length > 0 && name.length > 0 && firstName.length > 0) {
            axios.patch(`${process.env.REACT_APP_API_URL}/user`,null,{
                params:{ email, name, firstName },
                headers: {
                    Authorization: "Bearer " + props.userData.jwt
                }
            })
                .then((response) =>{
                    throwPostSuccess();
                })
                .catch(()=> {
                    throwApiError()
                })
        } else
            throwFormError()
    }

    function throwPostSuccess() {
        NotificationManager.success('Profil mis à jour, veuillez vous reconnecter.');
        tempoAndNavigate();
    }

    function tempoAndNavigate() {
        setTimeout(()=>{
            navigate('/app/logout');
        },2000)
    }

    function throwFormError(){
        setIsLoading(false);
        NotificationManager.error('Veuillez remplir tous les champs.');
    }

    function throwApiError(){
        setIsLoading(false);
        NotificationManager.error("Une erreur est survenue.");
    }

    return (
        <>
            <h1 className="card-title text-primary mx-auto">Profil</h1>
            <div className="block">
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name.toString()} className="input input-ghost w-full max-w-xs"/>
                <input type="text" onChange={(e)=>setFirstName(e.target.value)} value={firstName.toString()} className="input input-ghost w-full max-w-xs"/>
                <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email.toString()} className="input input-ghost w-full max-w-xs col-span-2"/>
            </div>
            <div className="flex justify-center pt-2">
                <Button text="Modifier" onClick={updateProfil} isLoading={isLoading} />
            </div>
        </>
    );
}

export default ProfilForm;
