const sumAll = function(a,b) {
    if ((a < 0 || b < 0) || ( typeof(a) !== "number" || typeof(b) !== "number" )) {
        let err = "ERROR";
        return err
    }

    if (a> b) {
    let sum = ((a) * (a+1)) / 2;
    return sum
    } else {
    let sum = ((b) * (b+1)) / 2;
    return sum
    }

    

};

// Do not edit below this line
module.exports = sumAll;
