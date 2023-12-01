import { v4 as uuidv4 } from 'uuid';
type Item = {
  id: string;
  name: string;
  price: number;
  description: string;
};

type User = {
  id: string;
  name: string;
  age: number;
  cart: Item[];
};