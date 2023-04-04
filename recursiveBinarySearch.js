function recursiveBinarySearch(array, target) {
	return search(array, target, 0, array.length - 1);
}

function search(array, target, leftIndex, rightIndex) {
	if (leftIndex > rightIndex) {
		return -1;
	}

	let middleIndex = Math.floor((rightIndex + leftIndex) / 2) ;

	if ((array[middleIndex] === target)) {
		return middleIndex;
	}

	if (target < array[middleIndex]) {
		return search(array, target, leftIndex, middleIndex - 1);
	} else {
		return search(array, target, middleIndex + 1, rightIndex);
	}
}

console.log(recursiveBinarySearch([-5, -1, 2, 4, 8, 10], 2));
console.log(recursiveBinarySearch([-5, -1, 2, 4, 8, 10], 10));
console.log(recursiveBinarySearch([-5, -1, 2, 4, 8, 10], -1));

//Big-O - O(logn)


