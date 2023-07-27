const removeFromArray = function(array,...manyArgs) {
    const newArray = [];
    array.forEach((item) => {
        if (!manyArgs.includes(item)) {
            newArray.push(item)
        }
    });

    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
