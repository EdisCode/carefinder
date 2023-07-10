import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer
        theme="light"
        position="top-center"
        autoClose={3000}
        closeOnClick
        pauseOnHover={false}
      />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
