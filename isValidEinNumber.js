function isValidEinNumber(str) {
  const value = str;
  const re = /^\d{3}-?\d{2}-?\d{4}$/;
  const valid = re.test(value);
  if (valid) {
  	return true
  }
  return false;
}

module.exports = isValidEinNumber;

// // testing
// const test = isValidEinNumber('324-08-2463')
// console.log('test: ', test);
