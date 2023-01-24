import React from "react";

const Table = () => {
  const RowData = [
    {
      id: 1,
      x: 1,
      y: 1,
      r: 1,
      result: "true",
      executionTime: 1.23,
      startTime: "01.21",
    },
    {
      id: 2,
      x: 2,
      y: 1,
      r: 1,
      result: "true",
      executionTime: 1.23,
      startTime: "01.21",
    },
    {
      id: 3,
      x: 3,
      y: 1,
      r: 1,
      result: "true",
      executionTime: 1.23,
      startTime: "01.21",
    },
    {
      id: 4,
      x: 4,
      y: 1,
      r: 1,
      result: "true",
      executionTime: 1.23,
      startTime: "01.21",
    },
  ];

  return (
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
        {RowData.map((row) => (
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
              {row.result}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
