// upgrade
// sync
// accept

// function getNumber(string, index) {
//     return +string.split('.')[index];
// }

// Method to compare two versions.
// Returns 1 if v2 is smaller, -1
// if v1 is smaller, 0 if equal
function versionCompare(v1, v2)
{
    // vnum stores each numeric
    // part of version
    var vnum1 = 0, vnum2 = 0;
 
    // loop until both string are
    // processed
    for (var i = 0, j = 0; (i < v1.length
                            || j < v2.length);) {
        // storing numeric part of
        // version 1 in vnum1
        while (i < v1.length && v1[i] != '.') {
            vnum1 = vnum1 * 10 + (v1[i] - '0');
            i++;
        }
 
        // storing numeric part of
        // version 2 in vnum2
        while (j < v2.length && v2[j] != '.') {
            vnum2 = vnum2 * 10 + (v2[j] - '0');
            j++;
        }
 
        if (vnum1 > vnum2)
            return 1;
        if (vnum2 > vnum1)
            return -1;
 
        // if equal, reset variables and
        // go for next numeric part
        vnum1 = vnum2 = 0;
        i++;
        j++;
    }
    return 0;
}

function parseVersionFloat(versionString) {
    var versionArray = ("" + versionString)
            .replace("_", ".")
            .replace(/[^0-9.]/g, "")
            .split("."),
        sum = 0;
    for (var i = 0; i < versionArray.length; ++i) {
        sum += Number(versionArray[i]) / Math.pow(10, i * 3);
    }
    // console.log(versionString + " -> " + sum);
    return sum.toFixed(3)
}


function compare(local, remote) {
    let result = versionCompare(local, remote);

    switch (result) {
        case -1:
            // local version is lower
            return 'upgrade'
            break;
        case 0:
            // local version is the same
            return 'sync'
        case 1:
            // local version is the same
            return 'accept'
        default:
            // statements_def
            break;
    }
}

// console.group('1st Number');
console.log('"1.1.99", "1.2.0" => ', compare("1.1.99", "1.2.0"));
console.log('"1.1.98", "1.2.0" => ', compare("1.1.98", "1.2.0"));
console.log('"1.1.97", "1.2.0" => ', compare("1.1.97", "1.2.0"));

console.log('compare("1.1.30", "1.1.29")', compare("1.1.30", "1.1.29"));
console.log('compare("1.1.29", "1.1.29")', compare("1.1.29", "1.1.29"));
console.log('compare("1.1.28", "1.1.29")', compare("1.1.28", "1.1.29"));
console.log('compare("1.1.27", "1.1.29")', compare("1.1.27", "1.1.29"));
console.log('compare("1.1.26", "1.1.29")', compare("1.1.26", "1.1.29"));

// console.group('2rd Number');
console.log('compare("1.2.0", "1.1.29")', compare("1.2.0", "1.1.29"));
console.log('compare("1.2.30", "1.1.29")', compare("1.2.30", "1.2.29"));
console.log('compare("1.2.29", "1.1.29")', compare("1.2.29", "1.2.29"));
console.log('compare("1.2.28", "1.1.29")', compare("1.2.28", "1.2.29"));
console.log('compare("1.2.27", "1.1.29")', compare("1.2.27", "1.2.29"));

// console.log(compare("1.0", "1.0"));
// console.log(compare("2.0", "1.0"));
// console.log(compare("1.0", "2.0"));
// console.log(compare("1.0.1", "1.0"));
