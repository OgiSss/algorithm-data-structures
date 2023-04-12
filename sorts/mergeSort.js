function mergeSort(array) {
	if (array.length < 2) {
		return array;
	}

	const middleIndex = Math.floor(array.length / 2);
	const left = array.slice(0, middleIndex);
	const right = array.slice(middleIndex);

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	const sortedArray = [];
	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			sortedArray.push(left.shift());
		} else {
			sortedArray.push(right.shift());
		}
	}

	return [...sortedArray, ...left, ...right];
}

const array = [8, 20, -2, 4, -6];
// mergeSort(array);
// console.log(mergeSort(array));

// Big-O O(nlogn)

function mergeSort2(array) {
	if (array.length < 2) {
		return array;
	}

	const mid = Math.floor(array.length / 2);
	const leftArray = array.slice(0, mid);
	const rightArray = array.slice(mid);

	return merge2(mergeSort2(leftArray), mergeSort2(rightArray));
}

function merge2(leftArray, rightArray) {
	const sortedArray = [];

	while (leftArray.length && rightArray.length) {
		if (leftArray[0] <= rightArray[0]) {
			sortedArray.push(leftArray.shift());
		} else {
			sortedArray.push(rightArray.shift());
		}
	}

	return [...sortedArray, ...leftArray, ...rightArray];
}

console.log(mergeSort2(array));
