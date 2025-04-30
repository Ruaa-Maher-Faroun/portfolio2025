import "./imageAnimation.css";
import img from "../../assets/homeimg.svg";
import React from 'react'

export default function HomeImg() {
  return (
    <div className="image-animation">
      <img className="ast-img" src={img} />
    </div>
  )
}
