import React, {useEffect} from "react";
import FlowerCard from "../Components/FlowerCard";
import Button from "../Components/Button";
import AddFlowerModal from "../Components/Modal/AddFlower";


function IndexApp() {

    const flower = {
        name:"Orchidée",
        icon:"pot",
        description: "Plante de la chambre",
        next: new Date(),
    }

    const [changeMade, setChangeMade] = React.useState(false);

    useEffect(()=>{
        if (changeMade) {
            changeMade(false);
        }
    },[changeMade])

    return (
        <div className="flex">
            <div className="pt-16 space-y-4 gap-4 w-full px-4 md:grid md:grid-cols-2 md:space-y-0 z-20 pb-16">
                <div className="col-span-2 w-full grid">
                    <label htmlFor="my-modal-4" className="btn btn-primary justify-self-center md:justify-self-start">Ajouter une fleur</label>
                </div>
                <FlowerCard flower={flower} />
                <FlowerCard />
                <FlowerCard />
            </div>
            <AddFlowerModal setChangeMade={setChangeMade}/>
        </div>
    );
}

export default IndexApp;
