import { Outlet } from "react-router-dom";
import Logo from "@/assets/logo.svg"

const Auth = () => {
  return (
    <div className="bg-secondary-white-500 min-h-screen flex-center">
      <div className="wrapper">
        <div className="text-6xl">
            <img src={Logo} alt="website-logo" className="w-36 h-16 mx-auto" />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Auth;
