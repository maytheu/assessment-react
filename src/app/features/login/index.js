import { useDispatch } from "react-redux";

import { login } from "../../store/authSlice";
import { Input } from "../../common/sharedComponent";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [input, setInput] = useState({ username: "", password: "" });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const onLogin = () => {
    dispatch(login());
    navigate("/dashboard", { replace: true });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Welcome, please sign in
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <Input
              label={"Username"}
              type={"text"}
              name={"username"}
              onChange={handleChange}
            />

            <Input
              label={"Password"}
              type={"password"}
              name={"password"}
              onChange={handleChange}
            />

            <div>
              <button
                disabled={!input.username || input.password.length < 6}
                onClick={onLogin}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
