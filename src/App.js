import * as React from "react";
import {Routes, Route, Outlet, Link, useNavigate} from "react-router-dom";
import SignIn from "./Pages/SignIn";
import Login from "./Pages/Login";
import QuatreCentQuatre from "./Pages/404";
import LoginLayout from "./Components/Layout/Login";
import IndexLogin from "./Pages/IndexLogin";
import AppLayout from "./Components/Layout/App";
import IndexApp from "./Pages/IndexApp";
import Logout from "./Pages/Logout";
import Profil from "./Pages/Profil";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<LoginLayout />}>
                <Route index element={<IndexLogin />} />
                <Route path="login" element={<Login />} />
                <Route path="sign-in" element={<SignIn />} />
            </Route>
            <Route path="/app" element={<AppLayout />}>
                <Route index element={<IndexApp />} />
                <Route path="logout" element={<Logout />} />
                <Route path="profil" element={<Profil />} />

            </Route>
            <Route path="*" element={<QuatreCentQuatre />} />
        </Routes>
    );
}
