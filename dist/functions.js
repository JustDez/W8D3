"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printCart = exports.cartTotal = exports.removeQuantityFromCart = exports.removeFromCart = exports.addToCart = exports.createItem = exports.createUser = void 0;
// functions.ts
const uuid_1 = require("uuid");
const createUser = (name, age) => {
    return {
        id: (0, uuid_1.v4)(),
        name,
        age,
        cart: [],
    };
};
exports.createUser = createUser;
const createItem = (name, price, description) => {
    return {
        id: (0, uuid_1.v4)(),
        name,
        price,
        description,
    };
};
exports.createItem = createItem;
const addToCart = (user, item) => {
    user.cart.push(item);
};
exports.addToCart = addToCart;
const removeFromCart = (user, item) => {
    user.cart = user.cart.filter((cartItem) => cartItem.id !== item.id);
};
exports.removeFromCart = removeFromCart;
const removeQuantityFromCart = (user, item, quantity) => {
    const index = user.cart.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
        user.cart.splice(index, quantity);
    }
};
exports.removeQuantityFromCart = removeQuantityFromCart;
const cartTotal = (user) => {
    return user.cart.reduce((total, item) => total + item.price, 0);
};
exports.cartTotal = cartTotal;
const printCart = (user) => {
    console.log("User's Cart:");
    user.cart.forEach((item) => {
        console.log(`${item.name} - $${item.price}`);
    });
    console.log("---------------");
};
exports.printCart = printCart;
