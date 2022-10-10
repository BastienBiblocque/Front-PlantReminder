import '../App.css';
import React from "react";
import {Audio, Triangle} from "react-loader-spinner";

function Loader(props) {

    switch (props.type) {
        case 'triangle':
            return (
                <>
                    <Triangle
                        height="80"
                        width="80"
                        radius="9"
                        color={props.color}
                        ariaLabel="loading"
                        wrapperStyle
                        wrapperClass
                    />
                </>
            );
        default:
            return (
                <>
                    <Audio
                        height="80"
                        width="80"
                        radius="9"
                        color={props.color}
                        ariaLabel="loading"
                        wrapperStyle
                        wrapperClass
                    />
                </>
            );
    }
}

Loader.defaultProps = {
    type: "",
    color: "#75a083",
    isLoading: false,
}

export default Loader;
