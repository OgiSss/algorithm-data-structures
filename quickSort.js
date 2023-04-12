function quickSort(array) {
	if (array.length < 2) {
		return array;
	}
	const pivot = array[array.length - 1];

	const left = [];
	const right = [];

	for (let i = 0; i < array.length - 1; i++) {
		if (array[i] < pivot) {
			left.push(array[i]);
		} else {
			right.push(array[i]);
		}
	}

	return [...quickSort(left), pivot, ...quickSort(right)];
}

const array = [8, 20, -2, 4, -6];
// quickSort(array);
// console.log(quickSort(array));

// Big-O Worst case - O(n^2)
// Avg case - O(nlogn)

function quickSort2(array) {
	if (array.length < 2) {
		return array;
	}

	const pivot = array[array.length - 1];

	const left = [];
	const right = [];

	for (let index = 0; index < array.length - 1; index++) {
		const element = array[index];

		if (element > pivot) {
			right.push(array[index]);
		} else {
			left.push(array[index]);
		}
	}

	return [...quickSort2(left), pivot, ...quickSort2(right)];
}

console.log(quickSort2([8, 20, -2, 4, -6]));
