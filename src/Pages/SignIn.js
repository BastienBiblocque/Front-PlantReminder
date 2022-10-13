import React, {useState} from "react";
import Input from "../Components/Input";
import {NotificationManager} from 'react-notifications';
import Button from "../Components/Button";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function SignIn() {
    const navigate = useNavigate();

    const [name, setName] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    const sign = () => {
        if (name && firstName && email && password) {
            setIsLoading(true);
            const regexMail = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$');
            if (regexMail.test(email.toString())) {
                const regexPassword = new RegExp('^[a-zA-Z]{6,}$');
                if (regexPassword.test(password.toString())) {
                    axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`,null,{
                        params:{ name, firstName, email, password }
                    })
                        .then(() =>{
                            throwPostSuccess();
                        })
                        .catch(()=> {
                            throwMailAlreadyExistError();
                        })
                } else
                    throwPasswordToShort()
            } else
                throwInvalidMail()
        } else {
            NotificationManager.error('Information manquante.');
        }
    }

    function throwPostSuccess() {
        NotificationManager.success('Compte créer avec succès, vous pouvez vous connecter.');
        navigate('/login');
    }

    function throwPasswordToShort() {
        NotificationManager.error('Veuillez choisir un mot de passe plus long.');
        setIsLoading(false);
    }

    function throwInvalidMail() {
        NotificationManager.error('Veuillez entrer une adresse email valide.');
        setIsLoading(false);
    }

    function throwMailAlreadyExistError() {
        setIsLoading(false);
        NotificationManager.error("Cette adresse mail est déjà utilisée.");
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
                <Button text="Inscription" onClick={sign} isLoading={isLoading} />
            </div>
            <hr />
            <span className="label-text mx-auto">Déjà un compte ?</span>
            <div className="flex justify-center pt-2">
                <Button className="btn-outline" direction="/login" text="Se connecter" />
            </div>
        </>
    );
}

export default SignIn;
