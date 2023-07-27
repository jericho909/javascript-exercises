const add = function(a, b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(array) {
	let sum = 0;
  array.forEach(item => {
    sum += item;
  });
  return sum
};

const multiply = function(array) {
  let result = 1;
  array.forEach(item => {
    result *= item
  });
  return result
};

const power = function(i, topower) {
  let c = 1;
  let result = 1;
  for (c; c <= topower; c++) {
    result = result * i;
  }
  return result
	
};

const factorial = function(a) {
  let result = 1;
  for (a; a > 1; a--) {
    result = result * a;
  }
  return result
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
