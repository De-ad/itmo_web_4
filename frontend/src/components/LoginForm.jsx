import React, { useEffect, useState } from "react";

const LoginForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    console.log(login);
    console.log(password);
  };

  return (
    <div className="grid w-64 rounded-lg p-4 space-y-3 bg-pale-green shadow-lg">
      <input
        type="text"
        className="rounded-lg p-2 shadow-lg"
        placeholder="Enter username"
        onChange={(e) => setLogin(e.target.value)}
      />
      <input
        type="password"
        className="rounded-lg p-2 shadow-lg"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex justify-center space-x-2">
        <button
          onClick={submitForm}
          className=" border-2 text-gray-900 border-[#3d724b] rounded-full w-fit px-2 shadow-lg "
        >
          Log in
        </button>
        <button
          onClick={submitForm}
          className=" border-2 text-gray-900 border-[#3d724b] rounded-full w-fit px-2 shadow-lg "
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
