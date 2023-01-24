import React from 'react';

const Table = () => {

    const RowData = [
        {id: 1, x: 1, y: 1, r: 1, result: "true", executionTime: 1.23, startTime: "01.21" },
        {id: 2, x: 2, y: 1, r: 1, result: "true", executionTime: 1.23, startTime: "01.21" },
        {id: 3, x: 3, y: 1, r: 1, result: "true", executionTime: 1.23, startTime: "01.21" },
        {id: 4, x: 4, y: 1, r: 1, result: "true", executionTime: 1.23, startTime: "01.21" },
    ]


    return (
        <table>
            <thead>
            <tr>
                <th>X</th>
                <th>Y</th>
                <th>R</th>
                <th>Result</th>
                <th>Execution time</th>
                <th>Start time</th>
            </tr>
            </thead>
            <tbody>
            {RowData.map((row =>
                <tr>
                    <td>{row.x}</td>
                    <td>{row.y}</td>
                    <td>{row.r}</td>
                    <td>{row.result}</td>
                    <td>{row.executionTime}</td>
                    <td>{row.startTime}</td>
                </tr>
            ))}

            </tbody>
        </table>
    );
};

export default Table;