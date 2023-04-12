function insertionSort(array) {
	for (let index = 1; index < array.length; index++) {
		let numberToInsert = array[index];

		let j = index - 1;
		while (j >= 0 && array[j] > numberToInsert) {
			array[j + 1] = array[j];
			j--;
		}
		array[j + 1] = numberToInsert;
	}
}

const arr = [-6,                                                                                                                5, 8, -10, 4];
// insertionSort(arr);
// console.log(arr);

// Big-O = O(n^2)

function instertionSort2(array) {
	for (let index = 1; index < array.length; index++) {
		const numberToInsert = array[index];

		if (array[index - 1] > numberToInsert) {
			let j = index - 1;
			while (j >= 0 && array[j] >= numberToInsert) {
				array[j + 1] = array[j];
				j--;
			}

			array[j - 1] = numberToInsert;
		}
	}

	return array;
}
