import { Link } from "react-router-dom";
import { LoginForm } from "./LoginForm";

const Login = () => {
  return (
    <div>
      <h4 className="text-center mt-8 mb-4 font-semibold text-xl">Login</h4>
      <LoginForm />
      <p className="mt-7 text-sm w-full flex items-center gap-4">Not have an account ? <Link to={"/auth/register"} className="underline underline-offset-4 hover:underline-offset-1 transition-all active:text-secondary-purple-600">Register</Link></p>
    </div>
  );
};

export default Login;
