import React, {useState} from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";
import axios from "axios";
import {NotificationManager} from "react-notifications";
import jwt_decode from "jwt-decode";
import {useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const login = () => {
        setIsLoading(true);
        if (email && password) {
            axios.post(`${process.env.REACT_APP_API_URL}/auth/login`,null,{
                params:{ email, password }
            })
                .then((response) =>{
                    throwPostSuccess(response);
                })
                .catch(()=> {
                    throwApiError()
                })
        } else
            throwFormError()
    }

    function throwPostSuccess(response) {
        const userData = jwt_decode(response.data.token);
        userData.jwt = response.data.token
        sessionStorage.setItem("userData", JSON.stringify(userData));
        navigate('/');
        console.log(userData);
    }

    function throwFormError(){
        setIsLoading(false);
        NotificationManager.error('Veuillez remplir tous les champs.');
    }

    function throwApiError(){
        setIsLoading(false);
        NotificationManager.error("Erreur d'authentification.");
    }

    return (
        <>
            <h1 className="card-title text-primary mx-auto">Se connecter</h1>
            <Input onChange={(e)=>setEmail(e.target.value)} placeholder="Adresse mail" className="mx-auto"/>
            <Input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Mot de passe" className="mx-auto"/>
            <span className="label-text mx-auto cursor-pointer">Mot de passe oublié ?</span>
            <div className="flex justify-center pt-2">
                <Button text="Connexion" onClick={login} isLoading={isLoading} />
            </div>
            <hr />
            <span className="label-text mx-auto">Pas encore de compte ?</span>
            <div className="flex justify-center pt-2">
                <Button className="btn-outline" direction="/sign-in" text="Rejoindre" />
            </div>
        </>
    );
}

export default Login;
