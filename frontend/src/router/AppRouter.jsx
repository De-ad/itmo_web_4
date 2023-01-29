import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./index";
import { connect, useSelector } from "react-redux";

const AppRouter = () => {
  const isAuth = useSelector((state) => state.authReducer.isLoggedIn);

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

const mapStateToProps = function (state) {
  return state.authReducer.isLoggedIn
}

export default connect(mapStateToProps)(AppRouter);
