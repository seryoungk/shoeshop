import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Router를 import 합니다.
import data from "./data";
import App from "./App";
import About from "./pages/About";
import Detail from "./pages/Detail";
import Error from "./pages/Error";
import Cart from "./pages/Cart";
import { Provider } from "react-redux";
import store from "./Store.js";
import Map from "./pages/Map";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail shoes={data} />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="*" element={<Error />} />
            <Route path="/cart" element={<Cart />} />{" "}
            <Route path="/map" element={<Map />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </QueryClientProvider>
);
