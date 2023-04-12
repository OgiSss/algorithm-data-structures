class Stack {
	data = [];

	push(element) {
		this.data.push(element);
	}

	pop() {
		return this.data.pop();
	}

	peek() {
		if (!this.isEmpty()) {
			return this.data[this.data.length - 1];
		}

		return null;
	}

	size() {
		return this.data.length;
	}

	isEmpty() {
		return this.data.length === 0;
	}
}

//Usage
// Browser history
// Undo operation when typing
// Call stack in javascript
