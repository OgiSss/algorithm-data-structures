class Queue {
	constructor() {
		this.items = {};
		this.front = 0;
		this.rear = 0;
	}

	enqueue(element) {
		this.items[this.rear] = element;
		this.rear++;
	}

	dequeue() {
		const item = this.items[this.front];
		delete this.items[this.front];
		this.front++;

		return item;
	}

	isEmpty() {
		return this.rear - this.front === 0;
	}

	size() {
        console.log(this.rear, this.front)
		return this.rear - this.front;
	}

	peek() {
		return this.items[this.front];
	}
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(1);
queue.enqueue(1);
queue.enqueue(1);
console.log(queue.size())

queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue.size())