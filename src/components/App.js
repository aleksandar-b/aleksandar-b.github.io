import React from "react"
import "../css/tailwind.css"
import "../App.css"
import Background from "./Background";
import ProfileCard from './ProfileCard';
import Gallery from "./Gallery";


function App() {
  return (
      <>
        <div className="h-screen text-white flex items-center snap">
            <Background />
            <ProfileCard />
        </div>
        <div className="h-auto h-screen flex flex-wrap flex-grow justify-between snap">
            <Gallery />
        </div>
      </>
  )
}

export default App