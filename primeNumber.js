function isPrime(n) {
	for (let i = 2; i < n; i++) {
		if (n % i === 0) {
			return false;
		}
	}

	return true;
}


console.log(isPrime(13));
console.log(isPrime(14));

// Big-O notation
// Big-O = O(n) - linear


function isPrimeOptimization(n) {
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			return false;
		}
	}

	return true;
}
console.log(isPrimeOptimization(13));
console.log(isPrimeOptimization(14));

// Big-O notation
// O(sqrt(n)) - 