const getTheTitles = function(arr) {
    const newArr = arr.map((item)=>{
        return item['title'];
    });
    return newArr;
};

// Do not edit below this line
module.exports = getTheTitles;
