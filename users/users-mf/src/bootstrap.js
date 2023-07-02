import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { Theme } from "@carbon/react";
const StoreProvider =
  process.env.NODE_ENV === "development"
    ? () => null
    : React.lazy(() =>
        import("globalStore/globalStore").then((res) => ({
          default: res.StoreProvider,
        })),
      );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {process.env.NODE_ENV === "development" ? (
      <Theme theme="g100">
        <App />
      </Theme>
    ) : (
      <StoreProvider>
        <Theme theme="g90">
          <App />
        </Theme>
      </StoreProvider>
    )}
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
