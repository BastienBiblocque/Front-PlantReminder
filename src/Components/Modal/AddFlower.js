import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import {NotificationManager} from "react-notifications";
import Input from "../Input";

function AddFlowerModal(props) {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [logo, setLogo] = useState(1);

    const addFlower = async () => {
        setIsLoading(true);
        if (name && description) {
            await postFlowerWithAxios()
        } else
            throwFormError();
    }

    async function postFlowerWithAxios() {
        await axios.post(`${process.env.REACT_APP_API_URL}/plante`, null, {
            params: {name, description, logo}
        })
            .then(() => {
                throwPostSuccess()
            })
            .catch(() => {
                throwApiError();
            })
    }

    function throwPostSuccess() {
        setIsLoading(false);
        NotificationManager.success("Fleur ajoutée avec succès.");
        props.setChangeMade(true);
        navigate('/app');
    }

    function throwFormError(){
        setIsLoading(false);
        NotificationManager.error('Veuillez remplir tous les champs.');
    }

    function throwApiError(){
        setIsLoading(false);
        NotificationManager.error("Erreur d'ajout de la fleur.");
    }

    return (
        <>
            <div>
                <input type="checkbox" id="my-modal-4" className="modal-toggle"/>
                <label htmlFor="my-modal-4" className="modal cursor-pointer">
                    <label className="modal-box relative" htmlFor="">
                        <div className="space-y-4">
                            <Input onChange={(e)=>setName(e.target.value)} placeholder="Nom de la plante" className="mx-auto"/>
                            <Input onChange={(e)=>setDescription(e.target.value)} placeholder="Description" className="mx-auto"/>
                            <div className="flex justify-end">
                                <button className="btn btn-primary" onClick={() => addFlower()}>Ajouter</button>
                            </div>
                        </div>
                    </label>
                </label>
            </div>
        </>
    );

}

export default AddFlowerModal;
