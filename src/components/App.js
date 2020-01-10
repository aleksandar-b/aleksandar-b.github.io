import React from "react"
import "../css/tailwind.css"
import "../App.css"
import Profile from "./Profile"
import Gallery from "./Gallery";

function App() {
  return (
      <div id="app">
          <Profile/>
          <Gallery/>
      </div>
  )
}

export default App