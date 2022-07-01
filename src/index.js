import React from "react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import { fetchCategories } from "./slices/optionsSlice";
import { createRoot } from "react-dom/client";

import "./App.scss";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

store.dispatch(fetchCategories);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
