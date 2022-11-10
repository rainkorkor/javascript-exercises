const fibonacci = function(num) {
    if (num == 1) {
        return 1;
    } else if (num == 0) {
        return 0;
    } else if (num < 0) {
        return 'OOPS'
    } else {
        return fibonacci(num-1) + fibonacci(num-2);
    }
};

// 0 + 1 (2nd term)
// 1 + 1 (3rd term)
// 2 + 1 (4th term)




// Do not edit below this line
module.exports = fibonacci;
