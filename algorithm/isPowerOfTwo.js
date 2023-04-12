function isPowerOfTwoBitwise(n) {
	if (n < 1) {
		return false;
	}

	return (n & (n - 1)) === 0;
}

// Big-O -  O(1)

function isPowerOfTwo(n) {
	if (n < 1) {
		return false;
	}

	while (n > 1) {
		if (n % 2 !== 0) {
			return false;
		}

		n = n / 2;
	}

	return true;
}

// Big-O -  O(log(n))

console.log(isPowerOfTwoBitwise(8));
console.log(isPowerOfTwoBitwise(7));
console.log(isPowerOfTwoBitwise(11));
console.log(isPowerOfTwoBitwise(16));


