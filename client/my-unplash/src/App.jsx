import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css"

function App() {

  const [backendData, setBackendData] = useState([{}]); 
  useEffect(()=>{
    fetch("http://localhost:5000/a").then(
      response => response.json()
    ).then(
      data=> {
        setBackendData(data);
      }
    );
  }, [])

  return (
    <div className="container">
      <Navbar/>
      {(typeof backendData.users === "undefined") ? (
        <p>Loading...</p>
      ): (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}
    </div>
  )
}

export default App;