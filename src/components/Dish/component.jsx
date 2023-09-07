"use client";

import { useState } from "react";

export const Dish = () => {
  const [amount, setAmount] = useState(0);

  return (
    <div>
      Dish
      <div>
        <button onClick={() => setAmount(amount - 1)}>-</button>
        {amount}
        <button onClick={() => setAmount(amount + 1)}>+</button>
      </div>
    </div>
  );
};
