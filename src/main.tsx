import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { redux } from "ui-cool-app-shared";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={redux.store}>
            <App />
        </Provider>
    </React.StrictMode>
);
