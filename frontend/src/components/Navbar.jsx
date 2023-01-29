import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/auth";
import {getAllData} from "../actions/data";

const Navbar = () => {
  const dispatch = useDispatch();
  // const DisplayData = useSelector((state) => state.dataReducer.payload);

    const handleLogOut = () => {
    dispatch(logout());
  };


  const logoutButtonValue = useSelector((state) => state.authReducer.isLoggedIn)
    ? "Log out"
    : "Log in";

  return (
    <div className=" bg-pale-green flex space-x-10 h-18 p-4 justify-around">
      <div className="space-x-20">
        <Link to="/coordinates-form" className="border-b-2 border-[#3d724b]">
          Coordinates Form
        </Link>
        <Link to="/start" className="border-b-2 border-[#3d724b]">
          Start
        </Link>
      </div>
      <button
        className=" border-2 border-[#3d724b] rounded-full px-2 text-gray-900"
        onClick={handleLogOut}
      >
        {logoutButtonValue}
      </button>
    </div>
  );
};

// const mapStateToProps = function (state) {
//     return state.dataReducer.payload;
// }

export default Navbar;
