import '../App.css';
import React from "react";
import {useNavigate} from "react-router-dom";

function Button(props) {
    const navigate = useNavigate();

    if (props.direction) {
        return (
            <>
                <button className={`btn btn-primary ${props.className}`} onClick={()=> {
                    navigate(props.direction)
                }}>{props.text}</button>
            </>
        );
    }
    return (
        <>
            <button className={`btn btn-primary ${props.className}`}>{props.text}</button>
        </>
    );

}

Button.defaultProps = {
    direction: null,
    text: "",
    className: '',
}

export default Button;
