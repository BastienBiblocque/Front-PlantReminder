import '../App.css';
import React from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";
function Login() {
    return (
        <>
            <h1 className="card-title text-primary mx-auto">Se connecter</h1>
            <Input placeholder="Adresse mail" className="mx-auto"/>
            <Input type="password" placeholder="Mot de passe" className="mx-auto"/>
            <span className="label-text mx-auto cursor-pointer">Mot de passe oublié ?</span>
            <div className="flex justify-center pt-2">
                {/*<button className="btn btn-primary">Connexion</button>*/}
                <Button text="Connexion" />

            </div>
            <hr />
            <span className="label-text mx-auto">Pas encore de compte ?</span>
            <div className="flex justify-center pt-2">
                <Button className="btn-outline" direction="/Sign-in" text="Rejoindre" />
            </div>
        </>
    );
}

export default Login;
