const removeFromArray = function(arr, ...manyMoreArgs) {
    // let index = arr.indexOf(toRemove);
    // // for(let i=0; i<arr.length;i++){
    // //     if(arr[i]=== toRemove){
    // //         index = i;
    // //     }
        
    // // }

    // arr.splice(index,1);
    // return arr;

    for(let i = 0; i <manyMoreArgs.length; i++){
        
        let index = arr.indexOf(manyMoreArgs[i]);
        if (index=== -1){
            continue;
        };
        arr.splice(index,1);
    }
    return arr
    // let newArr = [];
    // for(let j=0, k=0; j < arr.length;j++){
    //     if (j === index){
    //         continue;
    //     };
    //     newArr[k++] = arr[j];
    // }
    // return newArr;

};

// Do not edit below this line
module.exports = removeFromArray;
