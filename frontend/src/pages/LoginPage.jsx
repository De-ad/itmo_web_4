import React, { useEffect } from "react";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  //TODO: idk if this is necessary
  // useEffect(() =>{
  //     const reload = e => {
  //         e.preventDefault();
  //     }
  // });

  return (
    <div className="flex justify-center p-10">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
