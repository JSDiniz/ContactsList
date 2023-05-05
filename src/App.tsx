import React from "react";
import { ToastContainer } from "react-toastify";
import Routed from "./routes";

function App() {
  return (
    <React.Fragment>
      <Routed />
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
