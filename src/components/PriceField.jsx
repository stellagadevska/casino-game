import React from "react";

import { useSelector } from "react-redux";

const PriceField = () => {
  const title = "Total Price:";
  const fixedValue = 2;
  const currency = "BGN";
  const totalPrice = useSelector((state) => state.totalPrice);

  return (
    <div>
      <h2>{title}</h2>
      <div>
        {totalPrice.toFixed(fixedValue)} {currency}
      </div>
    </div>
  );
};

export default PriceField;
