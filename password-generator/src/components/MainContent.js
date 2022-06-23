import "../css/MainContent.css"
import React from "react"
// int 33 to 126 are the ascii characters that I need to generate
//String.fromCharCode(33) -> This function returns the ASCII character 
export default function MainContent(props){
    
    const [passArray, setPassArray] = React.useState([])
    const [clicked, setClicked] = React.useState(false)
    const passwords = {
        backgroundColor: props.darkMode ? "#273549" : "#696F77",
    } 

    const myStyles = {
        //put custom styles here
        backgroundColor: props.darkMode ? "#1F2937" : "#FFFBEB",
        // color: props.darkMode ? "white" : "black"
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

    function getRandNumRange(min, max){    
        const difference = max - min
        return (Math.floor(Math.random() * difference) + min)
    }

    function generatePassStrings(){
        const passwordLength = 15
        let randomNumber 
        let passString = ""
        for(let i =0; i<passwordLength; i++){
            randomNumber = getRandNumRange(33, 127)
            passString += String.fromCharCode(randomNumber)
        }
        return passString
    }

    function generateRandomPasswords(){

            setClicked(prevClicked => !prevClicked)
            setPassArray(() => {

                let newArr = []
                for(let i=0; i<2; i++){
                    const newPassword = generatePassStrings()
                    newArr = [...newArr, newPassword]
                }
                return newArr
            })
    }

    const displayPasswords = passArray.map(password => {
        return (<span style={passwords} key={password} className="password">{password}</span>)
    })

    return(
        <div style={myStyles}>
            <h1 style={generateStyles}>Generate a</h1>
            <h1 style={passStyles}>random password</h1>
            <p style={paragraphStyles}>Never use an insecure password again.</p>
            <button onClick={generateRandomPasswords}>{clicked ? "Hide Passwords" : "Generate Passwords"}</button>
            <hr></hr>
 
            {/* Make two divs here get generated */}
            <div className="div--passwords">
                { clicked ? displayPasswords : ""}
            </div>
        </div>
    )
}