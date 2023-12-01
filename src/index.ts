import { createUser, createItem, addToCart, printCart, cartTotal, removeFromCart } from './functions';

const user = createUser('John Doe', 25);

const itemA = createItem('Item A', 10, 'Description A');
const itemB = createItem('Item B', 15, 'Description B');
const itemC = createItem('Item C', 20, 'Description C');

addToCart(user, itemA);
printCart(user);
console.log(`Cart Total: $${cartTotal(user)}`);

addToCart(user, itemB);
addToCart(user, itemC);
printCart(user);
console.log(`Cart Total: $${cartTotal(user)}`);

removeFromCart(user, itemA);
printCart(user);
console.log(`Cart Total: $${cartTotal(user)}`);


