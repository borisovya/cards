import React from 'react';
import SuperInputText from "../components/c1-SuperInputText/SuperInputText";
import SuperButton from "../components/c2-SuperButton/SuperButton";
import SuperCheckbox from "../components/c3-SuperCheckbox/SuperCheckbox";

const Profile = () => {
    return (
        <div>
            <SuperInputText />
            <SuperButton>Click me</SuperButton>
            <SuperCheckbox />
        </div>
    );
};

export default Profile;