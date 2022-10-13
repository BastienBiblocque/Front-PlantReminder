import '../App.css';
import React from "react";
import { BsFlower1 } from 'react-icons/bs';
import { GiFlowerPot } from 'react-icons/gi';

function FlowerCard(props) {

    const FlowerIcon = () => {
        switch(props.flower.icon) {
            case 'pot' :
                return (
                    <div className="bg-white rounded-md">
                        <GiFlowerPot className={`h-14 w-14 mx-auto text-[${props.color}] px-4`} />
                    </div>
                )
            default : return (
                <div className="bg-white rounded-md">
                    <BsFlower1 className={`h-14 w-14 mx-auto text-[${props.color}] px-4`} />
                </div>
            );
        }
    }

    return (
        <>
            <div className="bg-white rounded-md shadow-md p-4">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        <FlowerIcon />
                        <div className="flex flex-col justify-center">
                            <h1 className="text-lg font-bold">{props.flower.name}</h1>
                            <p className="text-sm text-gray-500">{props.flower.description}</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="text-sm text-gray-500">Prochaine arrosage</p>
                        <p className="text-lg font-bold">{props.flower.next.toDateString()}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

FlowerCard.defaultProps = {
    background: "bg-white",
    icon: "",
    color: "#ffffff",
    flower:{
        name:"Fleur",
        description:"Plante du salon",
        next: new Date()
    }
}

export default FlowerCard;
