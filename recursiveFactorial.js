let recursiveFactorial = function (n) {
	if (n === 0) {
		return 1;
	}
	return n * recursiveFactorial(n - 1);
};

console.log(recursiveFactorial(100));


// Big-O = O(n)