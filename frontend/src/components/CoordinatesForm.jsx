import React, {useState} from 'react';

const CoordinatesForm = () => {
    const [xValue, setXValue] = useState("");
    const [yValue, setYValue] = useState("");
    const [rValue, setRValue] = useState("");

    const submitCoordinates = (e) => {
        e.preventDefault();
        console.log("submit coords button was clicked");
    }



    return (
        <div>
            <input type="text"
                   placeholder="Enter x coordinate"
                   value={xValue}
                   onChange={e => setXValue(e.target.value)}
            />
            <input type="text" placeholder="Enter y coordinate"/>
            <input type="text" placeholder="Enter radius value"/>
            <button onClick={submitCoordinates}>Check</button>
        </div>
    );
};

export default CoordinatesForm;