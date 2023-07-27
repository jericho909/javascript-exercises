const palindromes = function (str) {
    let newStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    newStr = newStr.reverse().join().replaceAll(",","");
    const result = (str === newStr) ? true : false; 
    return result
};

// Do not edit below this line
module.exports = palindromes;
