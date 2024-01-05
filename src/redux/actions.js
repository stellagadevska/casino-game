// Action Types
export const SELECT_NUMBER = "SELECT_NUMBER";
export const DESELECT_NUMBER = "DESELECT_NUMBER";
export const RESET_SELECTIONS = "RESET_SELECTIONS";
export const SET_BET_AMOUNT = "SET_BET_AMOUNT";
export const SET_NUMBER_OF_DRAWS = "SET_NUMBER_OF_DRAWS";
export const SET_TOTAL_PRICE = "SET_TOTAL_PRICE";
export const SET_COMMENTS = "SET_COMMENTS";
export const SET_TIME = "SET_TIME";

// Action Creators
export const selectNumber = (number) => ({
  type: SELECT_NUMBER,
  payload: number,
});

export const deselectNumber = (number) => ({
  type: DESELECT_NUMBER,
  payload: number,
});

export const resetSelections = () => ({
  type: RESET_SELECTIONS,
});

export const setBetAmount = (amount) => ({
  type: SET_BET_AMOUNT,
  payload: amount,
});

export const setNumberOfDraws = (numberOfDraws) => ({
  type: SET_NUMBER_OF_DRAWS,
  payload: numberOfDraws,
});

export const setTotalPrice = (price) => ({
  type: SET_TOTAL_PRICE,
  payload: price,
});

export const setComments = (comments) => ({
  type: SET_COMMENTS,
  payload: comments,
});

export const setTime = (time) => ({
  type: SET_TIME,
  payload: time,
});
