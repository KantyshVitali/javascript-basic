'use strict';

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

let readMap = new WeakMap();

for(let message of messages) {
  readMap.set(message, new Date(2017, 1, 1));
}