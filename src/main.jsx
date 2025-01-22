import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/router";
import AuthProvider from "./Context/AuthProvider";
import 'react-toastify/ReactToastify.css';
import { ToastContainer } from "react-toastify";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="max-w-screen-2xl mx-auto">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <ToastContainer/>
    </div>
  </StrictMode>
);
