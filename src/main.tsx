import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.ts";
import { RouterProvider } from "react-router-dom";
import root from "./routes/root.tsx";
import { Toaster } from "sonner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster position="top-center" theme="system" richColors></Toaster>
        <RouterProvider router={root}></RouterProvider>
        <ToastContainer></ToastContainer>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
