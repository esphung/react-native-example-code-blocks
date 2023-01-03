// Validates that the input string is a valid date formatted as "mm/dd/yyyy"
function isValidDate(dateString)
{
    // First check for the pattern
    if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
        return false;

    // Parse the date parts to integers
    var parts = dateString.split("/");
    var day = parseInt(parts[1], 10);
    var month = parseInt(parts[0], 10);
    var year = parseInt(parts[2], 10);

    // Check the ranges of month and year
    if(year < 1000 || year > 3000 || month == 0 || month > 12)
        return false;

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    // Adjust for leap years
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
};

// testiing
// console.log('isValidDate("09/30/1998"): ', isValidDate("09/30/1998"));

module.exports = isValidDate;

// const formatDate = (date) => {
//     const d = new Date(date);
//     const formatted = (((d.getMonth() > 8)
//         ? (d.getMonth() + 1) : ('0' + (d.getMonth() + 1))) + '/' + ((d.getDate() > 9)
//         ? d.getDate() : ('0' + d.getDate())) + '/' + d.getFullYear());
//     return formatted;
// };

// console.log('formatDate("2021-02-01T17:00:00.000Z"): ', formatDate("2021-02-01T17:00:00.000Z"));
