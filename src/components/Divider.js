import React from "react"

const Divider = ({ styles }) => (
  <div
    className="border-t border-gray-800 border-solid"
    style={{
      width: "50px",
      height: "0px",
      opacity: "0.5",
      ...styles,
    }}
  />
)

export default Divider
