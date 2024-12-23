import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "./Redux/index";
import {Provider} from "react-redux"
import {GoogleMapsProvider  } from "./maps/GoogleMapsProvider";

const store=configureStore({
      reducer:rootReducer,
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <BrowserRouter>
  <GoogleMapsProvider>
       <App />
       <Toaster/>
    </GoogleMapsProvider>
  </BrowserRouter>

    </Provider>

);
