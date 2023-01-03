const formatDate = (date) => {
    const d = new Date(date);
    const formatted = (((d.getMonth() > 8)
        ? (d.getMonth() + 1) : ('0' + (d.getMonth() + 1))) + '/' + ((d.getDate() > 9)
        ? d.getDate() : ('0' + d.getDate())) + '/' + d.getFullYear());
    return formatted;
};

// console.log('formatDate("2021-02-01T17:00:00.000Z"): ', formatDate("2021-02-01T17:00:00.000Z"));

module.exports = formatDate;
