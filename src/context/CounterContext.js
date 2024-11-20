import { createContext } from "react";

const initialState = {
  count: 0,
  increment: () => {},
  decrement: () => {},
};

export const CounterContext = createContext(initialState);


