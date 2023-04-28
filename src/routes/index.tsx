import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const Routed = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default Routed;
