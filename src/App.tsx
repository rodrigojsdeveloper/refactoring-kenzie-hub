import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AllRoutes } from "./routes";
import React from "react";

const App = () => {
  return (
    <React.Fragment>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <AllRoutes />
    </React.Fragment>
  );
};

export { App };
