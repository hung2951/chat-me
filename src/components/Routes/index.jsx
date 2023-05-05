import { Route, Routes } from "react-router-dom"
import Home from "../../Pages/home/home"
import Login from "../../Pages/auth/login"
import Regiter from "../../Pages/auth/register";
import LayoutClient from "../Layout";

const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutClient />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Regiter />} />
    </Routes>
  );
}

export default RootRoutes