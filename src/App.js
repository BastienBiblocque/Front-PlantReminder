import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import Login from "./Pages/Login";
import QuatreCentQuatre from "./Pages/404";
import LoginLayout from "./Components/Layout/Login";
import IndexLogin from "./Pages/IndexLogin";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<LoginLayout />}>
                <Route index element={<IndexLogin />} />
                <Route path="login"index element={<Login />} />
                <Route path="sign-in" element={<SignIn />} />
            </Route>
            <Route path="*" element={<QuatreCentQuatre />} />
        </Routes>
    );
}
