import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import {NotificationManager} from "react-notifications";
import Input from "../Input";
import {GiCarnivorousPlant, GiFireFlower, GiFlowerPot} from "react-icons/gi";
import {BsFlower1} from "react-icons/bs";
import Loader from "../Loader";
import UserData from "../../Utils/UserData";

function AddFlowerModal(props) {
    const navigate = useNavigate();

    const wateringDelayValue = [
        {name: "1 jour", value: '1D'},
        {name: "2 jours", value: '2D'},
        {name: "5 jours", value: '3D'},
        {name: "1 semaine", value: '1W'},
        {name: "10 jours", value: '10D'},
        {name: "2 semaines", value: '2W'},
    ]

    const [isLoading, setIsLoading] = useState(false);

    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [logo, setLogo] = useState(1);
    const [wateringDelay, setWateringDelay] = useState(null);

    const [isLog, setIsLog] = useState(null);
    const [userData, setUserData] = useState(null);

    const addFlower = async () => {
        setIsLoading(true);
        if (name && description && logo && wateringDelay) {
            await postFlowerWithAxios()
        } else
            throwFormError();
    }

    async function postFlowerWithAxios() {
        await axios.post(`${process.env.REACT_APP_API_URL}/plante`, null, {
            params: {name, description, logo, wateringDelay},
            headers: {
                Authorization: "Bearer " + userData.jwt
            }
        })
            .then(() => {
                throwPostSuccess()
            })
            .catch(() => {
                throwApiError();
            })
    }

    function throwPostSuccess() {
        setTimeout(()=>{
            close();
        },2000)
    }

    function close() {
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
                <UserData setIsLog={setIsLog} setUserData={setUserData}/>
                <input type="checkbox" id="my-modal-4" className="modal-toggle"/>
                <label htmlFor="my-modal-4" className="modal cursor-pointer">
                    <label className="modal-box relative" htmlFor="">
                        {isLoading ? (
                            <div className="flex justify-center items-center h-full">
                                <Loader type="triangle"/>
                            </div>
                        ) : (
                            <div className="space-y-4">
                            <Input onChange={(e)=>setName(e.target.value)} placeholder="Nom de la plante" className="mx-auto"/>
                            <Input onChange={(e)=>setDescription(e.target.value)} placeholder="Description" className="mx-auto"/>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className={`border rounded-md ${logo===1 ? 'border-primary' : null}`} onClick={()=>setLogo(1)}>
                                    <GiFlowerPot className={`h-16 w-16 mx-auto px-4`} />
                                </div>
                                <div className={`border rounded-md ${logo===2 ? 'border-primary' : null}`} onClick={()=>setLogo(2)}>
                                    <BsFlower1 className={`h-16 w-16 mx-auto px-4`} />
                                </div>
                                <div className={`border rounded-md ${logo===3 ? 'border-primary' : null}`} onClick={()=>setLogo(3)}>
                                    <GiCarnivorousPlant className={`h-16 w-16 mx-auto px-4`} />
                                </div>
                                <div className={`border rounded-md ${logo===4 ? 'border-primary' : null}`} onClick={()=>setLogo(4)}>
                                    <GiFireFlower className={`h-16 w-16 mx-auto px-4`} />
                                </div>
                            </div>
                            <select onClick={(e)=>setWateringDelay(e.target.value)} className="select select-primary w-full max-w-xs">
                                <option disabled selected>Arrosage à quelle fréquence ?</option>
                                {wateringDelayValue.map((delay, index) => (
                                    <option key={index} value={delay.value}>{delay.name}</option>
                                ))}
                            </select>
                            <div className="flex justify-end">
                                <button className="btn btn-primary" onClick={() => addFlower()}>Ajouter</button>
                            </div>
                        </div>
                        )}
                    </label>
                </label>
            </div>
        </>
    );

}

export default AddFlowerModal;
