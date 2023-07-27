const fibonacci = function(num) {
let fib = [1];
num = parseInt(num);
if (num > 0) {
    for (let i=0; i<num; i++){
        if (fib.length < 3){
            let nextNum = fib[i] + i;
            fib.push(nextNum);
        } else {
            let nextNum = fib[i] + fib[i-1];
            fib.push(nextNum);
        }
      };
    
    return fib[num-1]
} else if (num === 0) {
    return 0
} else {
    let err = "OOPS";
    return err
}

};

// Do not edit below this line
module.exports = fibonacci;
