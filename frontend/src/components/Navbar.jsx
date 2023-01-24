import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  let isAuth = true;
  let logButtonValue = isAuth ? "Log out" : "Log in";

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
      <button className=" border-2 border-[#3d724b] rounded-full px-2 text-gray-900">
        {logButtonValue}
      </button>
    </div>
  );
};

export default Navbar;
