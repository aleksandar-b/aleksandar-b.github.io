import React from 'react';
import Background from "./Background";
import ProfileCard from "./ProfileCard";
import ScrollDownIcon from "./ScrollDownIcon";

function Profile() {
    return <>
        <section className="h-screen text-white flex flex-col justify-center items-center h-screen snap">
            <Background />
            <ProfileCard />
            <ScrollDownIcon />
        </section>
    </>
}

export default Profile