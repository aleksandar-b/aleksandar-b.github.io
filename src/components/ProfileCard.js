import React from "react"
import Divider from "./Divider"
import {Brush} from "./brush/Brush";

const ProfileCard = () => (
  <div className="z-10 flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-3xl font-hairline leading-relaxed px-4 proxima-font">
          <span className="font-hairline text-gray-800">I'm</span>
          <span className="opacity-25 font-medium">&#183;</span>
          <span className="font-hairline text-gray-900">Alex</span>
          <span className="font-medium inline-block text-2xl opacity-25 transform -translate-y-1 ml-1">
        &#xac;
      </span>
    </h1>
    <div className="text-lg font-hairline tracking-wide highlight">
      <span className="">Software</span>
      <span className="mx-1 font-bold opacity-25">&#183;</span>
      <span className="">Engineer</span>
      <span className="mx-1 font-bold opacity-25">&#183;</span>
     
    </div>
    <div className="py-4">
      <Divider />
    </div>
    <p className="text-sm pb-4 md:w-2/5 w-4/5 text-center">
      <a
        href="#"
        className="no-underline mr-2 cursor-text tracking-wide font-hairline text-gray-900"
      >
        FullStack Developer with over 7 years of experience building web apps
        using React, Node, Golang.
      </a>
    </p>
    <div className="flex justify-center items-center pb-2 mt-12">
      <a
        href="https://github.com/aleksandar-b"
        className="no-underline mr-3"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github" height="18" width="18" src="github.svg" />
      </a>
      <a
        href="https://twitter.com/aleksandar874"
        className="no-underline mr-3"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter" height="18" width="18" src="twitter.svg" />
      </a>
      <a
        href="https://codepen.io/idx"
        className="no-underline mr-"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="codepen" height="18" width="18" src="codepen.svg" />
      </a>
    </div>
  </div>
)

export default ProfileCard
