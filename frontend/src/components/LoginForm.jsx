import { useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../actions/auth";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // works
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  const message = useSelector((state) => state.messageReducer.message);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    dispatch(register(username, password));
  };

  return (
    <div className="grid w-64 rounded-lg p-4 space-y-3 bg-pale-green shadow-lg">
      <input
        type="text"
        className="rounded-lg p-2 shadow-lg"
        placeholder="Enter username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="rounded-lg p-2 shadow-lg"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex justify-center space-x-2">
        <button
          onClick={handleLogin}
          className=" border-2 text-gray-900 border-[#3d724b] rounded-full w-fit px-2 shadow-lg "
        >
          Log in
        </button>
        <button
          onClick={handleRegistration}
          className=" border-2 text-gray-900 border-[#3d724b] rounded-full w-fit px-2 shadow-lg "
        >
          Sign up
        </button>
      </div>
      <div>{message}</div>
    </div>
  );
};

export default LoginForm;
