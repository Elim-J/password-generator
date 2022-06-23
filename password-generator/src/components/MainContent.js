import "../css/MainContent.css"
import React from "react"
// int 33 to 126 are the ascii characters that I need to generate
//String.fromCharCode(33) -> This function returns the ASCII character 
export default function MainContent(props){
    
    
    const myStyles = {
        //put custom styles here
        backgroundColor: props.darkMode ? "#1F2937" : "#FFFBEB"
    }

    const generateStyles ={
        color: props.darkMode ? "white" : "#273549"
    }

    const passStyles = {
        color: props.darkMode ? "#F9B755" : "#F59E0B"
    }

    const paragraphStyles = {
        color: props.darkMode ? "#D5D4D8" : "#6B7280"
    }

    return(
        <div style={myStyles}>
            <h1 style={generateStyles}>Generate a</h1>
            <h1 style={passStyles}>random password</h1>
            <p style={paragraphStyles}>Never use an insecure password again.</p>
            <button style={myStyles}>Generate Passwords</button>
            <hr></hr>

            {/* Make two divs here get generated */}
        </div>
    )
}