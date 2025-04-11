import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeContext";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "./components/i18n";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
    <Suspense fallback={<div>Loading translations...</div>}>
        {/* <React.StrictMode> */}
            <HashRouter>
                <ThemeProvider>
                    <Provider store={store}>
                        <App />
                    </Provider>
                </ThemeProvider>
            </HashRouter>
        {/* </React.StrictMode>{" "} */}
    </Suspense>
);
