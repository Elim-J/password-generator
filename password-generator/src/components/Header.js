import "../css/Header.css"
import React from "react"
import starEmpty from "../images/star-empty.png"
import starFilled from "../images/star-filled.png"

// The Header will only have the star icon for darkmode feature


export default function Header(props){

    const star = props.darkMode ? starFilled : starEmpty; 
    
    return(
        <div>
            <img src={star} alt="" 
                onClick={props.handleClick}
            />
        </div>
    )
}