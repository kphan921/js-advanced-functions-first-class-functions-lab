// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = () => {
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = () => drivers.slice(drivers.length - 2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    return (n) => n * fare ;
}


function fareDoubler(n) {
    return 2 * n;
}

function fareTripler(n) {
    return 3 * n;
}

function selectDifferentDrivers(arrayOfDrivers, cb) {
    return cb();
}