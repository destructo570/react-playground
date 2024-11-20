import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CounterContextProvider } from "./context/CounterContextProvider";
import store from "./reduxStore/store";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </CounterContextProvider>
  </StrictMode>
);
