import React from 'react';
import ProfileBackground from "./ProfileBackground";
import ProfileCard from "./ProfileCard";
import ScrollDownIcon from "./ScrollDownIcon";

function Profile() {
    return <>
        <section className="h-screen text-white flex flex-col justify-center items-center h-screen snap">
            <ProfileBackground animate={true} />
            <ProfileCard />
            <ScrollDownIcon />
        </section>
    </>
}

export default Profile