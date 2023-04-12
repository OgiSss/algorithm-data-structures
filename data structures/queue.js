class Queue {
	items = [];

	enqueue(element) {
		this.items.push(element);
	}

	dequeue() {
		return this.items.shift();
	}

	isEmpty() {
		this.items.length === 0;
	}

	print() {
		console.log(this.items);
	}

	size() {
		this.items.length;
	}

	peek() {
		if (!this.isEmpty()) {
			return this.items[0];
		}

		return null;
	}
}

//Usage
// Cpu task
// callback queue in Javascript runtime
