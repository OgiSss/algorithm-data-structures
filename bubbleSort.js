function bubbleSort(array) {
	swapped = false;

	do {
		swapped = false;
		for (let index = 0; index < array.length; index++) {
			if (array[index + 1] < array[index]) {
				const temp = array[index];
				array[index] = array[index + 1];
				array[index + 1] = temp;
				swapped = true;
			}
		}
	} while (swapped);

	return array;
}

// Big-O = O(n^2)

console.log(bubbleSort([-6, -2, 20, 6, 9, -11, 23]));

function bubbleSort2(array) {
	let hasChanged = false;

	do{
		hasChanged = false;
		for (let index = 0; index < array.length; index++) {
			if (array[index] > array[index + 1]) {
				const temp = array[index + 1];
				array[index + 1] = array[index];
				array[index] = temp;

				hasChanged = true;
			}
		}
	}
	while (hasChanged);
	return array;
}

console.log(bubbleSort2([-6, -2, 20, 6, 9, -11, 23]));
