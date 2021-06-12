import React from "react"
import ProfileBackground from "./ProfileBackground"
import ProfileCard from "./ProfileCard"
import ScrollDownIcon from "./ScrollDownIcon"

function Profile() {
  return (
    <section className="section">
      <div className="z-10 text-lg space-x-8 font-hairline p-4 text-right text-gray-800"> <a href="#gallery">Projects</a> <a href="/blog">Writings</a> </div>
      <ProfileBackground animate={true} />
      <ProfileCard />
      <ScrollDownIcon />
    </section>
  )
}

export default Profile
