const validateX = (x) =>{
    if ((x.toString().trim() === "") || isNaN(Number(x))){
        return false;
    }
    const value = parseFloat(x);
    return !(value < -3 || value > 3);
}

const validateY = (y) =>{
    if ((y.toString().trim() === "") || isNaN(Number(y))){
        return false;
    }
    const value = parseFloat(y);
    return !(value < -3 || value > 3);

}

const validateR = (r) =>{
    if ((r.toString().trim() === "") || isNaN(Number(r))){
        return false;
    }
    const value = parseFloat(r);
    return !(value <= 0 || value > 3);

}

export {validateX, validateR, validateY};