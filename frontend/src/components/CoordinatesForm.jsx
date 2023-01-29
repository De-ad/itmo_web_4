import React, {useEffect, useState} from "react";
import {getData, deleteAllData, setRChange} from "../actions/data";
import {useDispatch} from "react-redux";
import {validateR, validateX, validateY} from "../util/validator";

const CoordinatesForm = () => {
  const [xValue, setXValue] = useState("");
  const [yValue, setYValue] = useState("");
  const [rValue, setRValue] = useState("");
  const [xMessage, setXMessage] = useState("");
  const [yMessage, setYMessage] = useState("");
  const [rMessage, setRMessage] = useState("");


  const dispatch = useDispatch();

  const submitCoordinates = (e) => {
    console.log("submit coords button was clicked");
    if (validateX(xValue) && validateY(yValue) && validateR(rValue)) {
        dispatch(getData(xValue, yValue, rValue));
    }
  };

  const handleDelete = () => {
      console.log("handle delete...")
      dispatch(deleteAllData());
  }

  const handleXChange = () => {
      if (!validateX(xValue)){
          setXMessage("x should be a number between -3 and 3");
      }
      else{
        setXMessage("");
      }
  }

  const handleYChange = () => {
      if (!validateY(yValue)){
          setYMessage("y should be a number between -3 and 3");
      }
      else{
          setYMessage("");
      } }

  const handleRChange = () =>{
      if (!validateR(rValue)){
          setRMessage("r should be a number between 0 and 3");
      }
      else{
          dispatch(setRChange(rValue));
          setRMessage("");
      }
  }

  useEffect(() => {
      handleXChange();
      handleYChange();
      handleRChange();
  }, [xValue, yValue, rValue]);


    return (
    <div className="grid w-64 desktop:self-start rounded-lg p-4 space-y-3 bg-pale-green shadow-lg">
      <input
        type="text"
        className="rounded-lg p-2 shadow-lg"
        placeholder="Enter x coordinate"
        value={xValue}
        onChange={e => setXValue(e.target.value)}
      />
      <input
        className="rounded-lg p-2 shadow-lg"
        type="text"
        placeholder="Enter y coordinate"
        value={yValue}
        onChange={e => setYValue(e.target.value)}
      />
      <input
        type="text"
        className="rounded-lg p-2 shadow-lg"
        placeholder="Enter radius value"
        value={rValue}
        onChange={e => setRValue(e.target.value)}
      />
      <div className="flex justify-center space-x-3 pt-2 ">
        <button
          onClick={submitCoordinates}
          className=" border-2 text-gray-900 border-[#3d724b]  rounded-full w-fit px-2 shadow-lg "
        >
          Check
        </button>
          <button
              onClick={handleDelete}
              className=" border-2 text-gray-900 border-[#3d724b] rounded-full w-fit px-2 shadow-lg "
          >
              Delete
          </button>
      </div>
        <div>{xMessage}</div>
        <div>{yMessage}</div>
        <div>{rMessage}</div>
    </div>
  );
};

export default CoordinatesForm;
