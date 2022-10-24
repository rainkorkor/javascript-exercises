const ftoc = function(temp) {
  return parseFloat((Math.round(((temp-32)/1.8) * 10 )/10).toFixed(1))

};

const ctof = function(temp) {
  return parseFloat((Math.round((temp * 1.8+32) *10)/10).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
