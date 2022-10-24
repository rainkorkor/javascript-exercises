const sumAll = function(num1,num2) {
    if (num1<0 || num2<0) {
        return 'ERROR'
    } else if (typeof(num1) !== 'number' || typeof(num2) !== 'number'){
        return 'ERROR';
    }
    let total = 0;
    if(num1<num2){
        for(let i = num1; i<= num2; i++){
            total+=i;
        };
        return total;
    } else if(num1>num2){
        for(let i = num2; i<=num1;i++){
            total+=i;
        };
        return total;
    } else {
        return total += num1;
    }


};

// Do not edit below this line
module.exports = sumAll;
