import React, {useEffect, useRef} from 'react';

const Graph = () => {
    const WIDTH = 300;
    const HEIGHT = 300;
    const canvasRef = useRef(null);

    const drawLines = (ctx) => {
        // x axis
        ctx.strokeStyle = "#000";
        ctx.beginPath();
        ctx.moveTo(0, HEIGHT/2);
        ctx.lineTo(WIDTH, HEIGHT/2);
        ctx.stroke();

        // y axis
        ctx.beginPath();
        ctx.moveTo(WIDTH/2, 0);
        ctx.lineTo(WIDTH/2, HEIGHT);
        ctx.stroke();

    }
    const draw = (ctx) => {
        drawLines(ctx);
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = WIDTH;
        canvas.height = HEIGHT;
        ctx.fillStyle = "#2e5e8b";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        draw(ctx);
    }, [])






    return (
        <canvas ref={canvasRef}/>
    );
};

export default Graph;