import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NumberButton from "../components/NumberButton";
import "./PlayGround.css";
import InputField from "../components/InputField";
import PriceField from "../components/PriceField";
import Timer from "../components/Timer";
import Comments from "../components/Comments";

const MAX_SELECTIONS = 12;
const TOTAL_NUMBERS = 80;

const PlayGround = () => {
  const dispatch = useDispatch();

  const selectedNumbers = useSelector((state) => state.selectedNumbers);
  const betAmount = useSelector((state) => state.betAmount);
  const numberOfDraws = useSelector((state) => state.numberOfDraws);

  useEffect(() => {
    const price = selectedNumbers.length * betAmount * numberOfDraws;
    dispatch({ type: "SET_TOTAL_PRICE", payload: price });
  }, [selectedNumbers, betAmount, numberOfDraws, dispatch]);

  const handleClick = (num) => {
    if (selectedNumbers.includes(num)) {
      dispatch({ type: "DESELECT_NUMBER", payload: num });
    } else {
      if (selectedNumbers.length < MAX_SELECTIONS) {
        dispatch({ type: "SELECT_NUMBER", payload: num });
      }
    }
  };

  const isDisabled = (num) => {
    return (
      selectedNumbers.length === MAX_SELECTIONS &&
      !selectedNumbers.includes(num)
    );
  };

  const resetSelections = () => {
    dispatch({ type: "RESET_SELECTIONS" });
  };

  const handleBetChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 1.0) {
      dispatch({
        type: "SET_BET_AMOUNT",
        payload: parseFloat(value.toFixed(2)),
      });
    }
  };

  const handleDrawsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      dispatch({ type: "SET_NUMBER_OF_DRAWS", payload: value });
    }
  };

  return (
    <div className="App">
      <h1>Casino Game</h1>
      <div className="number-grid">
        {Array.from({ length: TOTAL_NUMBERS }, (_, index) => index + 1).map(
          (i) => (
            <NumberButton
              key={i}
              number={i}
              isSelected={selectedNumbers.includes(i)}
              onClick={() => handleClick(i)}
              isDisabled={isDisabled(i)}
            />
          )
        )}
      </div>
      <button onClick={resetSelections}>Reset Selections</button>
      <InputField
        id="betAmount"
        label="Bet Amount (BGN):"
        value={betAmount}
        onChange={handleBetChange}
        step="0.20"
        min="1.00"
      />
      <InputField
        id="numberOfDraws"
        label="Number of Draws:"
        value={numberOfDraws}
        onChange={handleDrawsChange}
        step="1"
        min="1"
      />
      <PriceField />
      <Timer />
      <Comments />
    </div>
  );
};

export default PlayGround;
