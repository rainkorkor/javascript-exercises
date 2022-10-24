const reverseString = function(str) {
    const newArray = str.split("");
    let revStr = '';
    let i = newArray.length -1;
    while(i>=0){
        revStr += newArray[i];
        i--;
    }
    return revStr;
};

// Do not edit below this line
module.exports = reverseString;
