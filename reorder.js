const priority_mcc_data = require('./priority_mcc_data.json');
// console.log('priority_mcc_data: ', priority_mcc_data);

// SORT LIST DATA BY KEY
function sortByKey(array, key) {
  return array.sort((a, b) => {
    const x = a[key];
    var y = eval(b[key]);
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}

// FORMAT MCC DATA FOR FLATLIST DATA
function formatData(data) {
	let list = []
	list = data.map((item) => ({
		key: item['Priority'],
		label: item['Main Category'],
		value: item['MCC'],
	}))
	return list;
}

const sorted = sortByKey(priority_mcc_data, "Priority");

const flatlistData = formatData(sorted);
console.log('flatlistData: ', flatlistData);
