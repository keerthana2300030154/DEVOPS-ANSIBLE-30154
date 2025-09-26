import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Redux imports
import { Provider } from "react-redux";
import store from "./stores/Store"; // <--- lowercase

// Patient context import
import { PatientProvider } from "./context/PatientContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PatientProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PatientProvider>
    </Provider>
  </React.StrictMode>
);
