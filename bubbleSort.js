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

console.log(bubbleSort([-6, -2, 20, 6, 9, -11, 23]));
