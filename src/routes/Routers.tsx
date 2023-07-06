import { Route, Routes, Navigate } from "react-router-dom";
import { Home, Login, Signup } from "../pages";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<Navigate to="/about" />} />
      <Route path="findHospital" element={<Navigate to="/findHospital" />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
};

export default Routers;
