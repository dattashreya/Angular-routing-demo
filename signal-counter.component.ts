import { signal } from '@angular/core';

export class CounterComponent {
  count = signal(0); // Initialize a writable signal with an initial value of 0

  increment() {
    this.count.set(this.count() + 1); // Update the signal's value using .set()
  }

  decrement() {
    this.count.update(currentCount => currentCount - 1); // Update using .update() with a callback
  }
}