import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./CounterApp";
import "./pollo.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CounterApp value={0} />
    </React.StrictMode>
);
