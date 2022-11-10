const palindromes = function (str) {
    // use regex to replace special characters with empty str
    const newStr = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const arr = newStr.split('');
    const backwardsArr = [];
    for (let i = arr.length -1; i >= 0 ; i-- ) {
        backwardsArr.push(arr[i]);
    }
    if (arr.toString() === backwardsArr.toString()){
        return true;
    } else {return false};
};

// Do not edit below this line
module.exports = palindromes;
