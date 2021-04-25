import React from "react";
import logo from "./logo.svg";
import "./index.css";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";

function App() {
    return (
        <div className="App">
            <Navbar>
                <Form />
            </Navbar>
        </div>
    );
}

export default App;
