import React, {useState} from "react";
import Loader from "../Components/Loader";
function IndexLogin() {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <>{isLoading ?(
            <div className="mx-auto">
                <Loader type="triangle"/>
            </div>)
          :null}</>
    );
}

export default IndexLogin;
