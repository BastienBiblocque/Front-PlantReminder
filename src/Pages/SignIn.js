import '../App.css';
import React, {useState} from "react";
import Input from "../Components/Input";
import {NotificationManager} from 'react-notifications';
import Button from "../Components/Button";
import axios from "axios";

function SignIn() {

    const [name, setName] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);


    const sign = () => {
        if (name && firstName && email && password) {
            //regex password
            if (password) {
                axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`,{
                    name,
                    firstName,
                    email,
                    password,
                })
                    .then(function (response) {
                        // handle success
                        console.log(response);
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
            } else {
                NotificationManager.error('Veuillez choisir un mot de passe sécurisé.');
            }
        } else {
            NotificationManager.error('Information manquante.');
        }
    }

    return (
        <>
            <h1 className="card-title text-primary mx-auto">S&apos;inscire</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 mx-4">
                <Input onChange={(e)=>setName(e.target.value)} placeholder="Nom" className="mx-auto"/>
                <Input onChange={(e)=>setFirstName(e.target.value)} placeholder="Prénom" className="mx-auto"/>
            </div>
            <Input onChange={(e)=>setEmail(e.target.value)} placeholder="Adresse mail" className="mx-auto"/>
            <Input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Mot de passe" className="mx-auto"/>
            <div className="flex justify-center pt-2">
                <Button text="Inscription" onClick={sign} />
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
