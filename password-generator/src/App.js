import './css/App.css';
import MainContent from "./components/MainContent"
import Header from "./components/Header"
import React from "react"

function App() {

  const [mode, setMode] = React.useState(true)
  function changeTheme(){
    setMode(prevMode => {
        return (prevMode ? false : true)
    })
}


  return (
    <div className="App">
      <Header darkMode={mode} handleClick={changeTheme}/>
      <MainContent darkMode={mode}/>
    </div>
  );
}

export default App;
