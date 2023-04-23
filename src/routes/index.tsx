import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const Routed = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Routed;
