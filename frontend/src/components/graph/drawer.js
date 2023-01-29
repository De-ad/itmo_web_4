export const drawLines = (ctx) => {
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

