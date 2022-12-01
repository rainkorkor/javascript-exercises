const findTheOldest = function(arr) {
    let Aage;
    let Bage;
    const currentYear = new Date().getFullYear();
    arr.sort((a,b)=> {
        if (a.yearOfDeath === undefined){
             Aage = currentYear - a.yearOfBirth;
             Bage = b.yearOfDeath - b.yearOfBirth;
        } else if (b.yearOfDeath === undefined){
            Bage = currentYear - b.yearOfBirth;
            Aage = a.yearOfDeath - a.yearOfBirth;
        } else {
            Aage = a.yearOfDeath - a.yearOfBirth;
            Bage = b.yearOfDeath - b.yearOfBirth;
        };

        if (Aage > Bage){
            return -1;
        } else return 1;
    });
    return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
