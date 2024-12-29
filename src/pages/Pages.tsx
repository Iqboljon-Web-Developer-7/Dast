import { Route, Routes } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Home from "./home/Home";
import Auth from "./auth/Auth";
import Login from "./auth/login/Login";

const Pages = () => {
  return (
    <Routes>
        <Route path="/auth" element={<Auth />} >
          <Route path="login" element={<Login />} />
        </Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Pages;
