import '../App.css';
import React from "react";
import {useNavigate} from "react-router-dom";
import {Audio, Triangle} from "react-loader-spinner";

function Button(props) {
    const navigate = useNavigate();

    if (props.direction) {
        return (
            <>
                <button className={`btn btn-primary ${props.className}`} onClick={()=> {
                    navigate(props.direction)
                }}>
                    {props.isLoading ? (<Triangle
                        height="20"
                        width="20"
                        radius="9"
                        color="black"
                        ariaLabel="loading"
                        wrapperStyle
                        wrapperClass
                    />) : props.text}
                </button>
            </>
        );
    }
    return (
        <>
            <button onClick={props.onClick} className={`btn btn-primary ${props.className}`}>
                {props.isLoading ? (<Triangle
                    height="20"
                    width="20"
                    radius="9"
                    color="black"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                />) : props.text}
            </button>
        </>
    );

}

Button.defaultProps = {
    direction: null,
    text: "",
    className: '',
}

export default Button;
