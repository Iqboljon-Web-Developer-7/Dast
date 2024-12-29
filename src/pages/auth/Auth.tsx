import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <>
      <div className="text-6xl">Auth</div>
      <Outlet />
    </>
  );
};

export default Auth;
