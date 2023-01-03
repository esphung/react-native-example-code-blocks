function isValidDlNumber(str = '') {
	return str.match(/^[-_a-zA-Z0-9.]+$/)
}

console.log('isValidDlNumber(): ', isValidDlNumber());

