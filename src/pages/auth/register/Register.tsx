import { Link } from "react-router-dom";
import { RegisterForm } from "./RegisterForm";

const Register = () => {
  return (
    <div>
      <h4 className="text-center mt-8 mb-4 font-semibold text-xl">Sing up</h4>
      <RegisterForm />
      <p className="mt-7 text-sm w-full flex items-center gap-4">Already have an account ? <Link to={"/auth/login"} className="underline underline-offset-4 hover:underline-offset-1 transition-all active:text-secondary-purple-600">Login</Link></p>
    </div>
  );
};

export default Register;
