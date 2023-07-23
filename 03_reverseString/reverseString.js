const reverseString = function(str) {
    let splitString = str.split('');
    let reverseString = splitString.reverse();
    let joinedString = reverseString.join("");

    return joinedString
    
};

// Do not edit below this line
module.exports = reverseString;
