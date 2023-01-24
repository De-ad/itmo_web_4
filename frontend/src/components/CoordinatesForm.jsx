import React, { useState } from "react";
import { getData } from "../actions/data";
import { useDispatch } from "react-redux";

const CoordinatesForm = () => {
  const [xValue, setXValue] = useState("");
  const [yValue, setYValue] = useState("");
  const [rValue, setRValue] = useState("");

  const dispatch = useDispatch();

  const submitCoordinates = (e) => {
    e.preventDefault();
    console.log("submit coords button was clicked");
    dispatch(getData(xValue, yValue, rValue));
  };

  return (
    <div className="grid w-64 rounded-lg p-4 space-y-3 bg-pale-green shadow-lg">
      <input
        type="text"
        className="rounded-lg p-2 shadow-lg"
        placeholder="Enter x coordinate"
        value={xValue}
        onChange={(e) => setXValue(e.target.value)}
      />
      <input
        className="rounded-lg p-2 shadow-lg"
        type="text"
        placeholder="Enter y coordinate"
        value={yValue}
        onChange={(e) => setYValue(e.target.value)}
      />
      <input
        type="text"
        className="rounded-lg p-2 shadow-lg"
        placeholder="Enter radius value"
        value={rValue}
        onChange={(e) => setRValue(e.target.value)}
      />
      <div className="flex justify-center ">
        <button
          onClick={submitCoordinates}
          className=" border-2 text-gray-900 border-[#3d724b] rounded-full w-fit px-2 shadow-lg "
        >
          Check
        </button>
      </div>
    </div>
  );
};

export default CoordinatesForm;
