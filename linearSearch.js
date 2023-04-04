function linearSearch(n) {
	const array = [1, 7, -10, 5, 3, 8, 9];
	for (let i = 0; i < Math.abs(n); i++) {
		if (array[i] === n) {
			return i;
		}
	}

	return -1;
}

console.log(linearSearch(1));
console.log(linearSearch(5));
console.log(linearSearch(4));
console.log(linearSearch(7));
console.log(linearSearch(-10));


// Big-O - O(n)