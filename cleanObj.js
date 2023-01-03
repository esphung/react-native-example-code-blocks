function clean(obj) {
  for (var propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined || obj[propName] === '' || obj[propName] === 0) {
      delete obj[propName];
    }
  }
  return obj
}

module.exports = clean;
