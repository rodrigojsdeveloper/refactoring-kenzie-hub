import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { SignUp } from "../pages/SignUp";
import { SignIn } from "../pages/SignIn";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/" element={<SignUp />} />
    </Routes>
  );
};

export { AllRoutes };
