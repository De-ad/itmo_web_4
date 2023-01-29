import React, {useEffect} from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import {getAllData} from "../actions/data";

const Table = () => {
  const dispatch = useDispatch();
  const DisplayData = useSelector((state) => state.dataReducer.payload);

  useEffect(() =>{
    dispatch(getAllData());
  },[])

  return DisplayData !== undefined ? (
    <table className=" bg-pale-green rounded-lg">
      <thead>
        <tr>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
          >
            X
          </th>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
          >
            Y
          </th>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
          >
            R
          </th>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
          >
            Result
          </th>
        </tr>
      </thead>
      <tbody>
        {DisplayData.map((row) => (
          <tr>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {row.x}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {row.y}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {row.r}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {row.result.toString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <table className=" bg-pale-green rounded-lg">
      <thead>
        <tr>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
          >
            X
          </th>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
          >
            Y
          </th>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
          >
            R
          </th>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
          >
            Result
          </th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};

const mapStateToProps = function (state) {
  return state.dataReducer.payload;
}

export default connect(mapStateToProps)(Table);
