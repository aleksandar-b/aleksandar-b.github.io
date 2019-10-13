import React from 'react';
import Background from "./Background";
import ProfileCard from "./ProfileCard";

function Profile() {
    return <>
        <section className="h-screen text-white flex items-center h-screen snap">
            <Background />
            <ProfileCard />
        </section>
    </>
}

export default Profile