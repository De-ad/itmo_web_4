import React from "react";
import LoginForm from "../components/LoginForm";
import CoordinatesForm from "../components/CoordinatesForm";
import Graph from "../components/Graph";
import Table from "../components/Table";

const GraphPage = () => {
  return (
    <div className="flex justify-center space-x-10 items-center pt-10">
      <Graph />
      <CoordinatesForm />
      <Table />
    </div>
  );
};

export default GraphPage;
