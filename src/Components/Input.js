import '../App.css';
import React from "react";

function Input(props) {
    return (
        <>
            <input type={props.type}
                   placeholder={props.placeholder}
                   className={`input input-bordered input-primary w-full max-w-xs ${props.className}`}
            />
        </>
    );

}

Input.defaultProps = {
    type: "text",
    placeholder: "",
    className: "",
}

export default Input;
