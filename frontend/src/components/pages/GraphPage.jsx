import React from "react";
import CoordinatesForm from "../CoordinatesForm";
import Graph from "../graph/Graph";
import Table from "../Table";

const GraphPage = () => {
  return (
    <div className="mobile:pt-10 mobile:grid mobile:justify-items-center 
    mobile:space-y-10 tablet:flex 
    tablet:justify-items-center  desktop:flex desktop:justify-center desktop:items-start desktop:space-x-10 desktop:items-center desktop:pt-10">
      <Graph />
      <CoordinatesForm />
      <Table />
    </div>
  );
};

export default GraphPage;
