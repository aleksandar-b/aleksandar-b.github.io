import React from 'react';
import ProfileBackground from "./ProfileBackground";
import ProfileCard from "./ProfileCard";
import ScrollDownIcon from "./ScrollDownIcon";

function Profile() {
    return <>
        <section className="section">
            <ProfileBackground animate={true} />
            <ProfileCard />
            <ScrollDownIcon />
        </section>
    </>
}

export default Profile