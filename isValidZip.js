const isValidZip = (value) => {
	const bool = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value);
	return bool;
};

// testing
// console.log('isValidZip("2d"): ', isValidZip("46228"));
