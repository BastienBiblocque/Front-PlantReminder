import '../App.css';
import React from "react";
import Input from "../Components/Input";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";

function SignIn() {

    return (
        <>
            <h1 className="card-title text-primary mx-auto">S&apos;inscire</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 mx-4">
                <Input placeholder="Nom" className="mx-auto"/>
                <Input placeholder="Prénom" className="mx-auto"/>
            </div>
            <Input placeholder="Adresse mail" className="mx-auto"/>
            <Input type="password" placeholder="Mot de passe" className="mx-auto"/>
            <div className="flex justify-center pt-2">
                <Button text="Inscription" />
            </div>
            <hr />
            <span className="label-text mx-auto">Déjà un compte ?</span>
            <div className="flex justify-center pt-2">
                <Button className="btn-outline" direction="/" text="Se connecter" />
            </div>
        </>
    );
}

export default SignIn;
