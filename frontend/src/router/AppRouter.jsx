import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./index";
import { connect, useSelector } from "react-redux";

const AppRouter = () => {
  function useAuth() {
    console.log(useSelector((state) => state.authReducer.isLoggedIn));
    return useSelector((state) => state.authReducer.isLoggedIn);
  }
  const isAuth = useAuth();

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </Routes>
  );
};

export default AppRouter;
