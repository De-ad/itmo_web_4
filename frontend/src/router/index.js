import { Navigate, Route } from "react-router-dom";
import GraphPage from "../pages/GraphPage";
import StartPage from "../pages/StartPage";
import React from "react";
import LoginPage from "../pages/LoginPage";

export const privateRoutes = [
  { path: "/coordinates-form", element: <GraphPage /> },
  { path: "/start", element: <StartPage /> },
  { path: "*", element: <Navigate to="/start" replace /> },
];

export const publicRoutes = [
  { path: "/login", element: <LoginPage /> },
  { path: "/start", element: <StartPage /> },
  { path: "*", element: <Navigate to="/login" replace /> },
];
