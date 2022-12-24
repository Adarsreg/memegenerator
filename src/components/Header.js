import React from "react"
import img1 from "../images/memy.png"
export default function Header(){
    return(
        <header className="header">
            <img src={img1}alt="img1" className="header-image" />
            <h2 className="header-title">
                Meme Generator
            </h2>
            
        </header>
    )
}