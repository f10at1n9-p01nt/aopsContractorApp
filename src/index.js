import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-social/bootstrap-social.css';
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from './App'

const container = document.getElementById("app")
const root = createRoot(container)
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);