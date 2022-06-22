import "../css/MainContent.css"
// int 33 to 126 are the ascii characters that I need to generate
//String.fromCharCode(33) -> This function returns the ASCII character 
export default function MainContent(){
    return(
        <div>
            <h1>Generate a</h1>
            <h1>random password</h1>
            <p>Never use an insecure password again.</p>

            <button>Generate Passwords</button>
            <hr></hr>

            {/* Make two divs here get generated */}
        </div>
    )
}