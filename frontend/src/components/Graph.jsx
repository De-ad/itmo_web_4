import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Graph = () => {
  const rowData = useSelector((state) => state.dataReducer.payload);

  const WIDTH = 300;
  const HEIGHT = 300;
  const canvasRef = useRef(null);
  const HEIGHT_PIX = 300;
  const WIDTH_PIX = 300;
  const MID_WIDTH_PIX = WIDTH_PIX / 2;
  const MID_HEIGHT_PIX = HEIGHT_PIX / 2;
  const HALF_RADIUS_PIX = 50;
  const RADIUS_PIX = HALF_RADIUS_PIX * 2;
  const ARROW_SIDE_PIX = 20;
  const ARROW_HEIGHT = Math.sqrt(
    Math.pow(ARROW_SIDE_PIX, 2) - Math.pow(ARROW_SIDE_PIX / 2, 2)
  );
  const DOT_RADIUS = 3.5;
  const DOT_COUNT = 5;
  let canvasRadius = "R";
  let canvasHalfRadius = "R/2";

  /* Масштабирование */
  let coordinatesToServer = canvasHalfRadius / HALF_RADIUS_PIX;
  let coordinatesToView = 1 / coordinatesToServer;

  const drawLines = (ctx) => {
    ctx.globalAlpha = 0.45;
    ctx.fillStyle = "#9966ff";
    ctx.strokeStyle = "#9966ff";

    /*треугольник */

    ctx.beginPath();
    ctx.moveTo(MID_WIDTH_PIX, MID_HEIGHT_PIX);
    ctx.lineTo(MID_WIDTH_PIX, MID_HEIGHT_PIX - HALF_RADIUS_PIX);
    ctx.lineTo(MID_WIDTH_PIX + HALF_RADIUS_PIX, MID_HEIGHT_PIX);
    ctx.lineTo(MID_WIDTH_PIX, MID_HEIGHT_PIX);
    ctx.stroke();
    ctx.fill();

    //квадрат
    ctx.beginPath();
    ctx.moveTo(MID_WIDTH_PIX, MID_HEIGHT_PIX);
    ctx.lineTo(MID_WIDTH_PIX, MID_HEIGHT_PIX - 2 * HALF_RADIUS_PIX);
    ctx.lineTo(
      MID_WIDTH_PIX - 2 * HALF_RADIUS_PIX,
      MID_HEIGHT_PIX - 2 * HALF_RADIUS_PIX
    );
    ctx.lineTo(MID_WIDTH_PIX - 2 * HALF_RADIUS_PIX, MID_HEIGHT_PIX);
    ctx.lineTo(MID_WIDTH_PIX, MID_HEIGHT_PIX);
    ctx.stroke();
    ctx.fill();

    /* окружность */
    ctx.beginPath();
    ctx.moveTo(MID_WIDTH_PIX, MID_HEIGHT_PIX);
    ctx.arc(
      MID_WIDTH_PIX,
      MID_HEIGHT_PIX,
      HALF_RADIUS_PIX,
      Math.PI / 2,
      Math.PI,
      false
    );
    ctx.stroke();
    ctx.fill();

    /* Цвет осей и точек на графике */
    ctx.globalAlpha = 1.0;
    ctx.fillStyle = "aliceblue";
    ctx.strokeStyle = "aliceblue";

    /* Ось Ox */

    ctx.beginPath();
    ctx.moveTo(0, MID_HEIGHT_PIX);
    ctx.lineTo(WIDTH_PIX, MID_HEIGHT_PIX);
    ctx.lineTo(WIDTH_PIX - ARROW_HEIGHT, MID_HEIGHT_PIX - ARROW_SIDE_PIX / 2);
    ctx.lineTo(WIDTH_PIX - ARROW_HEIGHT, MID_HEIGHT_PIX + ARROW_SIDE_PIX / 2);
    ctx.lineTo(WIDTH_PIX, MID_HEIGHT_PIX);
    ctx.stroke();
    ctx.fill();

    /* Ось Oy */

    ctx.beginPath();
    ctx.moveTo(MID_WIDTH_PIX, HEIGHT_PIX);
    ctx.lineTo(MID_WIDTH_PIX, 0);
    ctx.lineTo(MID_WIDTH_PIX - ARROW_SIDE_PIX / 2, ARROW_HEIGHT);
    ctx.lineTo(MID_WIDTH_PIX + ARROW_SIDE_PIX / 2, ARROW_HEIGHT);
    ctx.lineTo(MID_WIDTH_PIX, 0);
    ctx.stroke();
    ctx.fill();

    /* Точки на графике */
    ctx.beginPath();
    /* Центр */
    ctx.moveTo(MID_WIDTH_PIX, MID_HEIGHT_PIX);
    ctx.arc(MID_WIDTH_PIX, MID_HEIGHT_PIX, DOT_RADIUS, 0, 2 * Math.PI);
    /* Горизонтальные */
    for (let count = 1; count <= DOT_COUNT; count++) {
      if (count === 3) continue;
      let dotX = HALF_RADIUS_PIX * count;
      let dotY = MID_HEIGHT_PIX;
      let radius = DOT_RADIUS;
      ctx.moveTo(dotX, dotY);
      ctx.arc(dotX, dotY, radius, 0, 2 * Math.PI);
    }
    /* Вертикальные */
    for (let count = 1; count <= DOT_COUNT; count++) {
      if (count === 3) continue;
      let dotX = MID_WIDTH_PIX;
      let dotY = HEIGHT_PIX - HALF_RADIUS_PIX * count;
      let radius = DOT_RADIUS;
      ctx.moveTo(dotX, dotY);
      ctx.arc(dotX, dotY, radius, 0, 2 * Math.PI);
    }
    ctx.stroke();
    ctx.fill();
  };

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

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    ctx.fillStyle = "#72a580";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    draw(ctx);
    setRadius(ctx);

    canvas.addEventListener("click", (event) => {
      console.log("Нажали на канвас");

      if (canvasRadius === "R") {
        return;
      }
      // TODO: canvas radius getter
      console.log("Радиус удовлетворительный: r=" + canvasRadius);

      coordinatesToServer = canvasHalfRadius / HALF_RADIUS_PIX;

      let rect = canvas.getBoundingClientRect();
      let x = event.clientX - rect.left;
      let y = event.clientY - rect.top;

      let xCoordinate = (x - MID_WIDTH_PIX) * coordinatesToServer;
      let yCoordinate = (MID_HEIGHT_PIX - y) * coordinatesToServer;

      console.log(
        xCoordinate +
          " " +
          yCoordinate +
          " " +
          canvasRadius +
          " -- данные для отправки серверу"
      );
      // TODO: send to server
    });
  }, [rowData]);

  // function drawDot(xCoordinate, yCoordinate, color) {
  //
  //   coordinatesToServer = (canvasHalfRadius / HALF_RADIUS_PIX);
  //   coordinatesToView = 1/coordinatesToServer;
  //
  //   const xCanvas = xCoordinate * coordinatesToView + MID_WIDTH_PIX;
  //   const yCanvas = MID_HEIGHT_PIX - yCoordinate * coordinatesToView;
  //
  //   console.log(coordinatesToView)
  //
  //   ctx.fillStyle = color;
  //   ctx.beginPath();
  //   ctx.moveTo(xCanvas, yCanvas);
  //   ctx.arc(xCanvas, yCanvas, DOT_RADIUS, 0, 2 * Math.PI);
  //   ctx.fill();
  //   ctx.closePath();
  //
  // }

  // function drawDots(currentRadius) {
  //
  //   console.log("Рисуем точки...");
  //
  //   coordinatesToServer = (canvasHalfRadius / HALF_RADIUS_PIX);
  //   coordinatesToView = 1/coordinatesToServer;

  //   for (let i = 0; i < resValues.length; i++) {
  //     let table_x = parseFloat(xValues[i].innerHTML);
  //     let table_y = parseFloat(yValues[i].innerHTML);
  //     let table_r = parseInt(rValues[i].innerHTML);
  //     let color = (resValues[i].innerHTML === "Gotcha" ? "#66ff99" : "red");
  //
  //     if (parseInt(currentRadius) == table_r) {
  //       drawDot(table_x, table_y, color);
  //       console.log("Нарисовали точку: " + " x=" + table_x + " y=" + table_y + " color=" + color)
  //     }
  //   }
  // }
  //
  // function drawLastDot() {
  //   setTimeout(function () {
  //     coordinatesToServer = (canvasHalfRadius / HALF_RADIUS_PIX);
  //     coordinatesToView = 1 / coordinatesToServer;
  //
  //     let xValues = document.getElementsByClassName("x_column");
  //     let yValues = document.getElementsByClassName("y_column");
  //     let rValues = document.getElementsByClassName("r_column");
  //     let resValues = document.getElementsByClassName("result_column");
  //     // let inputR = $("#mainForm\\:r").val();
  //
  //     let index = xValues.length - 1;
  //     if (index === -1) {
  //       return;
  //     }
  //     let table_x = parseFloat(xValues[index].innerHTML);
  //     let table_y = parseFloat(yValues[index].innerHTML);
  //     let table_r = parseInt(rValues[index].innerHTML);
  //
  //     let color = (resValues[index].innerHTML === "Gotcha" ? "#66ff99" : "red");
  //
  //     if (table_r == parseInt(inputR)) drawDot(table_x, table_y, color);
  //   }, 150);
  // }

  return (
    <div className=" self-center">
      <canvas className=" rounded-lg" ref={canvasRef} />
    </div>
  );
};

export default Graph;
