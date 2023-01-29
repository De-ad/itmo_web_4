import React, {useCallback, useEffect, useRef, useState} from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import  {drawLines} from "./drawer";
import {DOT_RADIUS, HALF_RADIUS_PIX, HEIGHT_PIX, MID_HEIGHT_PIX, MID_WIDTH_PIX, WIDTH_PIX} from "./index";
import {getData} from "../../actions/data";

const Graph = () => {
  const rowData = useSelector((state) => state.dataReducer.payload);
  const rValue = useSelector((state) => state.radiusReducer.rValue);
  const canvasRef = useRef(null);
  const dispatch = useDispatch();
  const [canvasRadius, setCanvasRadius] = useState(0);
  const [canvasHalfRadius, setCanvasHalfRadius]= useState(0);
  let canvas;
  let ctx;

  const draw = (ctx) => {
    drawLines(ctx);
  };

  function setRadius(ctx) {
    /* Шрифт */
    ctx.font = "12px Century Schoolbook";
    /* Цвет */
    ctx.fillStyle = "aliceblue";
    ctx.strokeStyle = "aliceblue";

    /* R/2 */

    ctx.fillText(
      canvasHalfRadius,
      MID_WIDTH_PIX + HALF_RADIUS_PIX / 6,
      MID_HEIGHT_PIX + HALF_RADIUS_PIX + DOT_RADIUS
    ); //  Низ
    ctx.fillText(
      canvasHalfRadius,
      MID_WIDTH_PIX + HALF_RADIUS_PIX / 6,
      MID_HEIGHT_PIX - HALF_RADIUS_PIX + DOT_RADIUS
    ); //  Верх
    ctx.fillText(
      canvasHalfRadius,
      MID_WIDTH_PIX - HALF_RADIUS_PIX - DOT_RADIUS,
      MID_HEIGHT_PIX - HALF_RADIUS_PIX / 6
    ); //  Лево
    ctx.fillText(
      canvasHalfRadius,
      MID_WIDTH_PIX + HALF_RADIUS_PIX - DOT_RADIUS,
      MID_HEIGHT_PIX - HALF_RADIUS_PIX / 6
    ); //  Право

    /* R */

    ctx.fillText(
      canvasRadius,
      MID_WIDTH_PIX + HALF_RADIUS_PIX / 6,
      MID_HEIGHT_PIX + 2 * HALF_RADIUS_PIX + DOT_RADIUS
    ); //  Низ
    ctx.fillText(
      canvasRadius,
      MID_WIDTH_PIX + HALF_RADIUS_PIX / 6,
      MID_HEIGHT_PIX - 2 * HALF_RADIUS_PIX + DOT_RADIUS
    ); //  Верх
    ctx.fillText(
      canvasRadius,
      MID_WIDTH_PIX - 2 * HALF_RADIUS_PIX - DOT_RADIUS,
      MID_HEIGHT_PIX - HALF_RADIUS_PIX / 6
    ); //  Лево
    ctx.fillText(
      canvasRadius,
      MID_WIDTH_PIX + 2 * HALF_RADIUS_PIX - DOT_RADIUS,
      MID_HEIGHT_PIX - HALF_RADIUS_PIX / 6
    ); //  Право
  }

  const drawDots = (r, ctx) =>{
    for (let i = 0; i < rowData.length; i++) {
      if (r == rowData[i].r) {
        let color = (rowData[i].result) ? "#4ab44a" : "#b44a4a"
        console.log(color)
        drawDot(rowData[i].x, rowData[i].y, color, ctx);
    }
    }
  }

  const handleCanvasClick = (event) => {
    if (rValue){
      let rect = canvas.getBoundingClientRect();
      let coordinatesToServer = ((rValue/2) / HALF_RADIUS_PIX);
      let x = ((event.clientX - rect.left) - 150) *coordinatesToServer ;
      let y = (150 - (event.clientY - rect.top))*coordinatesToServer;
      dispatch(getData(x, y, rValue));
    }
  }

  function drawDot(xCoordinate, yCoordinate, color, ctx) {

    let coordinatesToServer = (canvasHalfRadius / HALF_RADIUS_PIX);
    let coordinatesToView = 1/coordinatesToServer;

    const xCanvas = xCoordinate * coordinatesToView + MID_WIDTH_PIX;
    const yCanvas = MID_HEIGHT_PIX - yCoordinate * coordinatesToView;

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(xCanvas, yCanvas);
    ctx.arc(xCanvas, yCanvas, DOT_RADIUS, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

  }

  useEffect(() =>{
    canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = WIDTH_PIX;
    canvas.height = HEIGHT_PIX;
    ctx.fillStyle = "#72a580";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    draw(ctx);
    if (rValue !== undefined && rowData != undefined){
      setCanvasRadius(rValue);
      setCanvasHalfRadius(rValue/2);
      setRadius(ctx);
      console.log(rowData);
      drawDots(rValue, ctx);
      // if (!lister) {
      //   canvas.addEventListener("click", function (event) {
      //     console.log("event listener add")
      //     xValue = (event.offsetX - 150) / 100 * rValue;
      //     yValue = (150 - event.offsetY) / 100 * rValue;
      //     setLister(true);
      //     dispatch(getData(xValue, yValue, rValue));
      //   })
      // }
      // if (rowData !== undefined) {
      //   drawDots(rValue);
      // }
    }
  });



  return (
    <div className="desktop:self-start" >
      <canvas className=" rounded-lg" ref={canvasRef} onClick={handleCanvasClick} />
    </div>
  );
};

const mapStateToProps = function (state) {
  return {
    payload : state.dataReducer.payload,
    rValue : state.radiusReducer.rValue}
}

export default connect(mapStateToProps)(Graph);
