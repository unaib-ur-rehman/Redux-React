import { BUY_BOOK, SELL_BOOK } from "./ActionTypes";

export const initialState = {
  NumberOfBooks: 20,
};
export const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BOOK:
      return {
        ...state,
        NumberOfBooks: state.NumberOfBooks - 1,
      };

    case SELL_BOOK:
      return {
        ...state,
        NumberOfBooks: state.NumberOfBooks + 1,
      };
    default:
      return state;
  }
};
