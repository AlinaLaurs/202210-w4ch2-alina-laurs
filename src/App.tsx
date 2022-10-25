import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Form } from "./components/form";
import { Access } from "./components/access";

function App() {
    return (
        <div className="App">
            <Form />
            <Access />
        </div>
    );
}

export default App;
