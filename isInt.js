function isInt(n){
    return Number(n) === n && n % 1 === 0;
}

function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}

// testing
console.log('isFloat(2.1): ', isFloat(2.1));
console.log('isFloat("1.00"): ', isFloat("1.00"));
console.log('isFloat(2.0): ', isFloat(2.0));

