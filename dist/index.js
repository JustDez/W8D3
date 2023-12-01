"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
const functions_1 = require("./functions");
const user = (0, functions_1.createUser)('John Doe', 25);
const itemA = (0, functions_1.createItem)('Item A', 10, 'Description A');
const itemB = (0, functions_1.createItem)('Item B', 15, 'Description B');
const itemC = (0, functions_1.createItem)('Item C', 20, 'Description C');
(0, functions_1.addToCart)(user, itemA);
(0, functions_1.printCart)(user);
console.log(`Cart Total: $${(0, functions_1.cartTotal)(user)}`);
(0, functions_1.addToCart)(user, itemB);
(0, functions_1.addToCart)(user, itemC);
(0, functions_1.printCart)(user);
console.log(`Cart Total: $${(0, functions_1.cartTotal)(user)}`);
(0, functions_1.removeFromCart)(user, itemA);
(0, functions_1.printCart)(user);
console.log(`Cart Total: $${(0, functions_1.cartTotal)(user)}`);
