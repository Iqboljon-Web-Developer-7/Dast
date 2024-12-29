import { Outlet } from "react-router-dom";
import Logo from "@/assets/logo.svg";
import Documentation from "@/components/auth/documentation";
import Learn from "@/components/auth/learn";
import { useDeleteAllUsersMutation } from "@/redux/api/auth";
import { Button } from "@/components/ui/button";

const Auth = () => {
  const [deleteAllUsers] = useDeleteAllUsersMutation()
  return (
    <div className="bg-secondary-white-500 min-h-screen flex-center relative">
      <div className="wrapper">
        <div className="text-6xl">
          <img src={Logo} alt="website-logo" className="w-36 h-16 mx-auto" />
        </div>
        <Button onClick={() => deleteAllUsers('')}>
          delete users
        </Button>
        <Outlet />

        <div className="footer absolute inset-[auto_8%_5%_8%] flex items-center justify-between">
          <Documentation />
          <Learn />
        </div>
      </div>
    </div>
  );
};

export default Auth;
