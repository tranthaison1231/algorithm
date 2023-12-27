import { assert } from 'https://deno.land/std@0.180.0/testing/asserts.ts';
// Link:  https://leetcode.com/problems/implement-queue-using-stacks/

interface IQueue<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T;
  empty(): boolean;
}

export class Queue<T> implements IQueue<T> {
  private storage: T[] = [];

  constructor(private capacity: number = Infinity) {}

  push(item: T): void {
    if (this.size() === this.capacity) {
      throw Error('Queue has reached max capacity, you cannot add more items');
    }
    this.storage.push(item);
  }

  size(): number {
    return this.storage.length;
  }

  pop(): T | undefined {
    return this.storage.shift();
  }

  peek(): T {
    return this.storage[0];
  }

  empty(): boolean {
    return this.storage.length === 0;
  }
}

Deno.test('push adds item to queue', () => {
  const queue = new Queue<number>();
  queue.push(1);
  assert(queue.size() === 1);
});

Deno.test('pop removes item from queue and returns it', () => {
  const queue = new Queue<number>();
  queue.push(1);
  assert(queue.pop() === 1);
  assert(queue.size() === 0);
});

Deno.test('peek returns first item in queue without removing it', () => {
  const queue = new Queue<number>();
  queue.push(1);
  queue.push(2);
  assert(queue.peek() === 1);
  assert(queue.size() === 2);
});

Deno.test('empty returns true if queue has no items', () => {
  const queue = new Queue<number>();
  assert(queue.empty() === true);
});

Deno.test('empty returns false if queue has items', () => {
  const queue = new Queue<number>();
  queue.push(1);
  assert(queue.empty() === false);
});

Deno.test('push throws error if queue is at max capacity', () => {
  const queue = new Queue<number>(1);
  queue.push(1);
  try {
    queue.push(2);
  } catch (e) {
    assert(e.message === 'Queue has reached max capacity, you cannot add more items');
  }
});
