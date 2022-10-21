import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <span><NavLink to={'/profile'}> Profile </NavLink></span>
            <span><NavLink to={'/register'}> Register </NavLink></span>
            <span><NavLink to={'/login'}> Login </NavLink></span>
            <span><NavLink to={'/passwordReset'}> Reset password </NavLink></span>
        </div>
    );
};

export default Header;