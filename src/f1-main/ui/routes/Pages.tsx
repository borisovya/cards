import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "../../../f2-features/auth/login/Login";
import Register from "../../../f2-features/auth/register/Register";
import Profile from "../Profile/Profile";
import Error404 from "../Error404/Error404";
import PasswordReset from "../../../f2-features/auth/password-reset/PasswordReset";
import NewPassword from "../../../f2-features/auth/password-reset/NewPassword";

const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navigate to={'../Profile'} />} />

                <Route path={'/login'} element={<Login />} />
                <Route path={'/register'} element={<Register />} />
                <Route path={'/profile'} element={<Profile />} />
                <Route path={'/passwordReset'} element={<PasswordReset />} />
                <Route path={'/newPassword'} element={<NewPassword />} />

                <Route path={'/*'} element={<Error404/>} />
            </Routes>

        </div>
    );
};

export default Pages;