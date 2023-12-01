import { v4 as uuidv4 } from 'uuid';
import { User, Item } from './types';

export const createUser = (name: string, age: number): User => {
  return {
    id: uuidv4(),
    name,
    age,
    cart: [],
  };
};

export const createItem = (name: string, price: number, description: string): Item => {
  return {
    id: uuidv4(),
    name,
    price,
    description,
  };
};

export const addToCart = (user: User, item: Item): void => {
  user.cart.push(item);
};

export const removeFromCart = (user: User, item: Item): void => {
  user.cart = user.cart.filter((cartItem) => cartItem.id !== item.id);
};

export const removeQuantityFromCart = (user: User, item: Item, quantity: number): void => {
  const index = user.cart.findIndex((cartItem) => cartItem.id === item.id);
  if (index !== -1) {
    user.cart.splice(index, quantity);
  }
};

export const cartTotal = (user: User): number => {
  return user.cart.reduce((total, item) => total + item.price, 0);
};

export const printCart = (user: User): void => {
  console.log("User's Cart:");
  user.cart.forEach((item) => {
    console.log(`${item.name} - $${item.price}`);
  });
  console.log("---------------");
};
