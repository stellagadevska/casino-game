import { combineReducers } from "redux";
const selectedNumbersInitialState = [];
const betAmountInitialState = 1.0;
const numberOfDrawsInitialState = 1;
const totalPriceInitialState = 0;
const commentsInitialState = [];
const timeInitialState = 180; // 3 minutes in seconds

const selectedNumbersReducer = (
  state = selectedNumbersInitialState,
  action
) => {
  switch (action.type) {
    case "SELECT_NUMBER":
      return [...state, action.payload];
    case "DESELECT_NUMBER":
      return state.filter((number) => number !== action.payload);
    case "RESET_SELECTIONS":
      return [];
    default:
      return state;
  }
};

const betAmountReducer = (state = betAmountInitialState, action) => {
  switch (action.type) {
    case "SET_BET_AMOUNT":
      return action.payload;
    default:
      return state;
  }
};

const numberOfDrawsReducer = (state = numberOfDrawsInitialState, action) => {
  switch (action.type) {
    case "SET_NUMBER_OF_DRAWS":
      return action.payload;
    default:
      return state;
  }
};

const totalPriceReducer = (state = totalPriceInitialState, action) => {
  switch (action.type) {
    case "SET_TOTAL_PRICE":
      return action.payload;
    default:
      return state;
  }
};

const commentsReducer = (state = commentsInitialState, action) => {
  switch (action.type) {
    case "SET_COMMENTS":
      return action.payload;
    default:
      return state;
  }
};

const timeReducer = (state = timeInitialState, action) => {
    switch (action.type) {
      case "SET_TIME":
        return action.payload;
      default:
        return state;
    }
  };

const rootReducer = combineReducers({
  selectedNumbers: selectedNumbersReducer,
  betAmount: betAmountReducer,
  numberOfDraws: numberOfDrawsReducer,
  totalPrice: totalPriceReducer,
  comments: commentsReducer,
  time: timeReducer
});

export default rootReducer;
