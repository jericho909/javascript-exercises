const repeatString = function(str, num) {
    let c = 0;
    let newStr = "";
    if (num < 0) {
        let err = "ERROR";
        return err
    } else {
        while (c<num) {
            newStr = newStr + str
            c += 1;
        }
    
        return newStr

    }
    
};

// Do not edit below this line
module.exports = repeatString;
