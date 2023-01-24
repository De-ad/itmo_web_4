import React from 'react';
import LoginForm from "../components/LoginForm";
import CoordinatesForm from "../components/CoordinatesForm";
import Graph from "../components/Graph";
import Table from "../components/Table";

const GraphPage = () => {


    return (
        <>
            <CoordinatesForm/>
            <Graph/>
            <Table/>

        </>
    );
};

export default GraphPage;