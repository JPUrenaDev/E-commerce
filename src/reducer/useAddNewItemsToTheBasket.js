import { useReducer } from "react";

const items = [];

export const useAddNewItemsToTheBasket = () => {
  const [state, dispatch] = useReducer(reducer, items);

  return { dispatch, state };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "addItem": {
      return [...state, action.payload];
    }
    case "deleteFromBasket": {
      console.log(action.payload.id);
      return state.filter((item) => item.id !== action.payload.id);
    }
  }
};
