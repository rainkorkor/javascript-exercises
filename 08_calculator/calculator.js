const add = function(a,b) {
  return a + b;
	
};

const subtract = function(a,b) {
  return a - b;
	
};

const sum = function(array) {
  let total = 0;
  for(let item of array){
    total += item;
  }

  return total;
	
	
};

const multiply = function(array) {
  total = 1;
  for (let i =0;i<array.length; i++){
    total *= array[i];
  }
  return total;

};

const power = function(a,b) {
  return a ** b;
	
};

const factorial = function(num) {

  if (num === 0){
    return 1;
  } else {
    return num * factorial(num - 1);
  };

	
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
