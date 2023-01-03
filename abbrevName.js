abbrev_name = function (str) {
	const abbrev = str.match(/\b([A-Z])/g).join('');

	return abbrev;
};
console.log(abbrev_name("Central Standard Time"));

module.exports = abbrev_name;

